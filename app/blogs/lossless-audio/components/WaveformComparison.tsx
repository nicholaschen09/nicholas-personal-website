'use client';

import { useMemo } from 'react';
import { generateSyntheticSignal, applyLossySimulation } from './audioVizUtils';

const LENGTH = 512;
const HEIGHT = 48;
const PAD = 4;

function waveformPath(samples: Float32Array, width: number, height: number): string {
  const n = samples.length;
  const max = Math.max(...Array.from(samples).map(Math.abs), 1e-6);
  const points: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = PAD + (i / (n - 1)) * (width - 2 * PAD);
    const y = height / 2 - (samples[i] / max) * (height / 2 - PAD);
    points.push(`${x},${y}`);
  }
  return `M ${points.join(' L ')}`;
}

export default function WaveformComparison() {
  const { original, lossy, difference } = useMemo(() => {
    const orig = generateSyntheticSignal(LENGTH);
    const lossySig = applyLossySimulation(orig);
    const diff = new Float32Array(LENGTH);
    for (let i = 0; i < LENGTH; i++) diff[i] = orig[i] - lossySig[i];
    return { original: orig, lossy: lossySig, difference: diff };
  }, []);

  const width = 400;
  const rowH = HEIGHT + 20;
  const totalH = rowH * 3;

  const pathOrig = waveformPath(original, width, HEIGHT);
  const pathLossy = waveformPath(lossy, width, HEIGHT);
  const pathDiff = waveformPath(difference, width, HEIGHT);

  return (
    <figure className="my-6 rounded-lg border border-stone-700 bg-stone-900/50 p-4">
      <svg
        viewBox={`0 0 ${width} ${totalH}`}
        className="w-full max-w-full"
        style={{ height: totalH }}
        aria-label="Waveform comparison: original, lossy, difference"
      >
        <text x={8} y={16} className="fill-stone-500 text-[10px] font-normal">
          Original
        </text>
        <path
          d={pathOrig}
          fill="none"
          stroke="rgb(163 230 53)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x={8} y={16 + rowH} className="fill-stone-500 text-[10px] font-normal">
          Lossy (simulated)
        </text>
        <path
          d={pathLossy}
          fill="none"
          stroke="rgb(251 146 60)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x={8} y={16 + rowH * 2} className="fill-stone-500 text-[10px] font-normal">
          Difference (thrown away)
        </text>
        <path
          d={pathDiff}
          fill="none"
          stroke="rgb(248 113 113)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <figcaption className="mt-2 text-center text-[11px] text-stone-500">
        Same clip: Original → simulated lossy (low-pass + quantize) → what was removed
      </figcaption>
    </figure>
  );
}
