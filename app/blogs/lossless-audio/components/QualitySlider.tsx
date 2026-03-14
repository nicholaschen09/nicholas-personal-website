'use client';

import { useMemo, useRef, useState } from 'react';
import {
  generateSyntheticSignal,
  dftMagnitude,
  SAMPLE_RATE,
} from './audioVizUtils';

const LENGTH = 512;
const CHART_HEIGHT = 44;
const ANIMATION_DURATION_MS = 4000;
const MAX_BARS = 100;

function applyLossyWithStrength(signal: Float32Array, strength: number): Float32Array {
  const kernelSize = Math.max(2, Math.round(2 + strength * 28));
  const levels = Math.max(4, Math.round(40 - strength * 35));
  const out = new Float32Array(signal.length);
  const half = Math.floor(kernelSize / 2);
  for (let i = 0; i < signal.length; i++) {
    let sum = 0;
    let count = 0;
    for (let k = -half; k <= half; k++) {
      const idx = i + k;
      if (idx >= 0 && idx < signal.length) {
        sum += signal[idx];
        count++;
      }
    }
    out[i] = sum / count;
  }
  for (let i = 0; i < out.length; i++) {
    const v = (out[i] + 1) * 0.5;
    const q = Math.round(v * (levels - 1)) / (levels - 1);
    out[i] = q * 2 - 1;
  }
  return out;
}

export default function QualitySlider() {
  const [strength, setStrength] = useState(0.55);
  const [isPlaying, setIsPlaying] = useState(false);
  const animRef = useRef<number | null>(null);
  const startStrengthRef = useRef(0.55);
  const startTimeRef = useRef(0);

  const play = () => {
    if (strength >= 1) {
      setStrength(0);
      startStrengthRef.current = 0;
    } else {
      startStrengthRef.current = strength;
    }
    startTimeRef.current = performance.now();
    setIsPlaying(true);

    const tick = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const t = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
      const eased = t * t * (3 - 2 * t);
      const newStrength = startStrengthRef.current + eased * (1 - startStrengthRef.current);
      setStrength(newStrength);
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        startStrengthRef.current = 0;
        startTimeRef.current = performance.now();
        setStrength(0);
        animRef.current = requestAnimationFrame(tick);
      }
    };
    animRef.current = requestAnimationFrame(tick);
  };

  const pause = () => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    setIsPlaying(false);
  };

  const { magOriginal, magLossy, maxMag, lossyParams, effectiveCutoffHz } = useMemo(() => {
    const kernelSize = Math.max(2, Math.round(2 + strength * 28));
    const levels = Math.max(4, Math.round(40 - strength * 35));
    const orig = generateSyntheticSignal(LENGTH);
    const lossySig = applyLossyWithStrength(orig, strength);
    const magO = dftMagnitude(orig);
    const magL = dftMagnitude(lossySig);
    let max = 0;
    for (let i = 0; i < magO.length; i++) {
      max = Math.max(max, magO[i], magL[i]);
    }
    // Effective high-frequency cutoff of lossy: highest bin with >5% of max magnitude
    const threshold = (max || 1) * 0.05;
    let lastSignificantBin = 0;
    for (let i = 0; i < magL.length; i++) {
      if (magL[i] >= threshold) lastSignificantBin = i;
    }
    const effectiveCutoffHz = (lastSignificantBin / magL.length) * (SAMPLE_RATE / 2);
    return {
      magOriginal: magO,
      magLossy: magL,
      maxMag: max || 1,
      lossyParams: { kernelSize, levels, lossinessPct: Math.round(strength * 100) },
      effectiveCutoffHz,
    };
  }, [strength]);

  const step = Math.max(1, Math.floor(magOriginal.length / MAX_BARS));
  const barWidth = 3;
  const gap = 0.8;
  const chartW = MAX_BARS * (barWidth + gap);

  const barsOriginal = [];
  const barsLossy = [];
  for (let i = 0; i < MAX_BARS; i++) {
    const idx = Math.min(i * step, magOriginal.length - 1);
    const hO = (magOriginal[idx] / maxMag) * (CHART_HEIGHT - 6);
    const hL = (magLossy[idx] / maxMag) * (CHART_HEIGHT - 6);
    const x = i * (barWidth + gap);
    barsOriginal.push({ x, h: Math.max(0.5, hO) });
    barsLossy.push({ x, h: Math.max(0.5, hL) });
  }

  return (
    <figure className="my-6 rounded-lg border border-stone-700 bg-stone-900/50 p-4">
      <div className="mb-1 flex items-center gap-3">
        <button
          type="button"
          onClick={isPlaying ? pause : play}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-200 transition-colors hover:bg-stone-600 hover:text-white"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="2" y="0" width="3" height="12" />
              <rect x="7" y="0" width="3" height="12" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 0v12l10-6-10-6z" />
            </svg>
          )}
        </button>
        <span className="text-[10px] shrink-0 text-stone-500">Less lossy</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={strength}
          onChange={(e) => setStrength(Number(e.target.value))}
          className="lossless-audio-slider h-1 min-w-0 flex-1 max-w-[260px] accent-lime-500"
          aria-label="Lossy strength"
        />
        <span className="text-[10px] shrink-0 text-stone-500">More lossy</span>
      </div>
      <p className="mb-0.5 pl-11 text-[11px] text-stone-500">
        Lossiness: <span className="inline-block min-w-[3ch] font-medium tabular-nums text-stone-400">{lossyParams.lossinessPct}%</span>
        {' · '}
        levels: <span className="inline-block min-w-[2.5ch] font-medium tabular-nums text-stone-400">{lossyParams.levels}</span>
        {' · '}
        kernel: <span className="inline-block min-w-[2.5ch] font-medium tabular-nums text-stone-400">{lossyParams.kernelSize}</span>
        {' · '}
        Frequency: <span className="inline-block min-w-[10ch] font-medium tabular-nums text-stone-400">0 – {Math.round(effectiveCutoffHz / 100) / 10} kHz</span>
      </p>
      <svg
        viewBox={`0 0 ${chartW} ${CHART_HEIGHT * 2}`}
        className="w-full max-w-full"
        style={{ height: CHART_HEIGHT * 2 }}
      >
        <g transform="translate(0, 0)">
          {barsOriginal.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={CHART_HEIGHT - b.h}
              width={barWidth}
              height={b.h}
              fill="rgb(251 146 60)"
              opacity={0.85}
            />
          ))}
        </g>
        <g transform={`translate(0, ${CHART_HEIGHT})`}>
          {barsLossy.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={CHART_HEIGHT - b.h}
              width={barWidth}
              height={b.h}
              fill="rgb(163 230 53)"
              opacity={0.85}
            />
          ))}
        </g>
      </svg>
      <div className="mt-2 flex items-center gap-4 pl-11 text-[10px] text-stone-500">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block h-2 w-2 rounded-sm opacity-85"
            style={{ backgroundColor: 'rgb(251 146 60)' }}
          />
          Original
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block h-2 w-2 rounded-sm opacity-85"
            style={{ backgroundColor: 'rgb(163 230 53)' }}
          />
          Simulated lossy
        </span>
      </div>
    </figure>
  );
}
