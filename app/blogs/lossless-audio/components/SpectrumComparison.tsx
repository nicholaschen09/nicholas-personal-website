'use client';

import { useMemo } from 'react';
import {
  generateSyntheticSignal,
  applyLossySimulation,
  dftMagnitude,
  SAMPLE_RATE,
} from './audioVizUtils';

const LENGTH = 512;
const CHART_WIDTH = 400;
const CHART_HEIGHT = 80;
const BAR_GAP = 1;
const MAX_BARS = 120;

function freqBinToHz(bin: number): number {
  return (bin * SAMPLE_RATE) / LENGTH;
}

export default function SpectrumComparison() {
  const { magOriginal, magLossy, maxMag } = useMemo(() => {
    const orig = generateSyntheticSignal(LENGTH);
    const lossySig = applyLossySimulation(orig);
    const magO = dftMagnitude(orig);
    const magL = dftMagnitude(lossySig);
    let max = 0;
    for (let i = 0; i < magO.length; i++) {
      max = Math.max(max, magO[i], magL[i]);
    }
    return { magOriginal: magO, magLossy: magL, maxMag: max || 1 };
  }, []);

  const barWidth = (CHART_WIDTH - (MAX_BARS - 1) * BAR_GAP) / MAX_BARS;
  const step = Math.max(1, Math.floor(magOriginal.length / MAX_BARS));

  const barsOriginal = [];
  const barsLossy = [];
  for (let i = 0; i < MAX_BARS; i++) {
    const idx = Math.min(i * step, magOriginal.length - 1);
    const hO = (magOriginal[idx] / maxMag) * (CHART_HEIGHT - 8);
    const hL = (magLossy[idx] / maxMag) * (CHART_HEIGHT - 8);
    const x = i * (barWidth + BAR_GAP);
    barsOriginal.push({ x, h: Math.max(1, hO) });
    barsLossy.push({ x, h: Math.max(1, hL) });
  }

  const cutoffHz = freqBinToHz(MAX_BARS * step);
  const totalH = CHART_HEIGHT * 2 + 60;

  return (
    <figure className="my-6 rounded-lg border border-stone-700 bg-stone-900/50 p-4">
      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${totalH}`}
        className="w-full max-w-full"
        style={{ height: totalH }}
        aria-label="Frequency spectrum: original vs lossy"
      >
        <text x={8} y={14} className="fill-stone-500 text-[10px] font-normal">
          Original spectrum
        </text>
        <g transform={`translate(0, 24)`}>
          {barsOriginal.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={CHART_HEIGHT - b.h}
              width={barWidth}
              height={b.h}
              fill="rgb(163 230 53)"
              opacity={0.9}
            />
          ))}
        </g>
        <text x={8} y={24 + CHART_HEIGHT + 14} className="fill-stone-500 text-[10px] font-normal">
          Lossy spectrum (high frequencies reduced)
        </text>
        <g transform={`translate(0, 24 + CHART_HEIGHT + 24)`}>
          {barsLossy.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={CHART_HEIGHT - b.h}
              width={barWidth}
              height={b.h}
              fill="rgb(251 146 60)"
              opacity={0.9}
            />
          ))}
        </g>
        <text
          x={CHART_WIDTH - 4}
          y={totalH - 4}
          textAnchor="end"
          className="fill-stone-600 text-[9px]"
        >
          ～0 – {Math.round(cutoffHz / 100) / 10} kHz
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-[11px] text-stone-500">
        FFT magnitude: lossy simulation cuts and smears high frequencies (like MP3’s psychoacoustic
        cutoff)
      </figcaption>
    </figure>
  );
}
