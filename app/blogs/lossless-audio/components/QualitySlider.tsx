'use client';

import { useMemo, useRef, useState } from 'react';
import {
  generateSyntheticSignal,
  dftMagnitude,
  SAMPLE_RATE,
} from './audioVizUtils';

const LENGTH = 512;
const CHART_HEIGHT = 44;
const ANIMATION_DURATION_MS = 2500;
const MAX_BARS = 100;

function applyLossyWithStrength(signal: Float32Array, strength: number): Float32Array {
  const kernelSize = Math.max(2, Math.round(2 + strength * 22));
  const levels = Math.max(4, Math.round(48 - strength * 42));
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

  const { magOriginal, magLossy, maxMag } = useMemo(() => {
    const orig = generateSyntheticSignal(LENGTH);
    const lossySig = applyLossyWithStrength(orig, strength);
    const magO = dftMagnitude(orig);
    const magL = dftMagnitude(lossySig);
    let max = 0;
    for (let i = 0; i < magO.length; i++) {
      max = Math.max(max, magO[i], magL[i]);
    }
    return { magOriginal: magO, magLossy: magL, maxMag: max || 1 };
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

  const cutoffHz = (MAX_BARS * step * SAMPLE_RATE) / LENGTH;

  return (
    <figure className="my-6 rounded-lg border border-stone-700 bg-stone-900/50 p-4">
      <div className="mb-3 flex items-center gap-3">
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
      <svg
        viewBox={`0 0 ${chartW} ${CHART_HEIGHT * 2 + 32}`}
        className="w-full max-w-full"
        style={{ height: CHART_HEIGHT * 2 + 32 }}
      >
        <text x={0} y={12} className="fill-stone-500 text-[10px]">
          Original
        </text>
        <g transform="translate(0, 18)">
          {barsOriginal.map((b, i) => (
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
        <text x={0} y={18 + CHART_HEIGHT + 12} className="fill-stone-500 text-[10px]">
          Simulated lossy
        </text>
        <g transform={`translate(0, 18 + CHART_HEIGHT + 18)`}>
          {barsLossy.map((b, i) => (
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
        <text
          x={0}
          y={CHART_HEIGHT * 2 + 26}
          className="fill-stone-500 text-[9px]"
        >
          Frequency
        </text>
        <text
          x={chartW}
          y={CHART_HEIGHT * 2 + 26}
          textAnchor="end"
          className="fill-stone-600 text-[9px]"
        >
          0 – {Math.round(cutoffHz / 100) / 10} kHz
        </text>
      </svg>
    </figure>
  );
}
