const SAMPLE_RATE = 44100;

/** Generate a short synthetic audio clip: harmonics + a transient. */
export function generateSyntheticSignal(length: number): Float32Array {
  const signal = new Float32Array(length);
  const fundFreq = 440;
  for (let n = 0; n < length; n++) {
    const t = n / SAMPLE_RATE;
    signal[n] =
      0.5 * Math.sin(2 * Math.PI * fundFreq * t) +
      0.3 * Math.sin(2 * Math.PI * fundFreq * 3 * t) +
      0.2 * Math.sin(2 * Math.PI * fundFreq * 5 * t) +
      0.15 * Math.sin(2 * Math.PI * fundFreq * 7 * t) +
      0.08 * Math.sin(2 * Math.PI * fundFreq * 9 * t);
    if (n < length * 0.1) {
      signal[n] *= n / (length * 0.1);
    }
    if (n > length * 0.9) {
      signal[n] *= (length - n) / (length * 0.1);
    }
  }
  const max = Math.max(...Array.from(signal).map(Math.abs));
  for (let n = 0; n < length; n++) signal[n] /= max;
  return signal;
}

/** Simulate lossy: low-pass (moving average) + quantization. */
export function applyLossySimulation(signal: Float32Array): Float32Array {
  const out = new Float32Array(signal.length);
  const kernelSize = 8;
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
  const levels = 32;
  for (let i = 0; i < out.length; i++) {
    const v = (out[i] + 1) * 0.5;
    const q = Math.round(v * (levels - 1)) / (levels - 1);
    out[i] = q * 2 - 1;
  }
  return out;
}

/** DFT magnitude spectrum (positive frequencies only). O(n²). */
export function dftMagnitude(signal: Float32Array): Float32Array {
  const N = signal.length;
  const outLen = Math.floor(N / 2) + 1;
  const magnitude = new Float32Array(outLen);
  for (let k = 0; k < outLen; k++) {
    let re = 0;
    let im = 0;
    for (let n = 0; n < N; n++) {
      const angle = (2 * Math.PI * k * n) / N;
      re += signal[n] * Math.cos(angle);
      im -= signal[n] * Math.sin(angle);
    }
    magnitude[k] = Math.sqrt(re * re + im * im) / N;
  }
  return magnitude;
}

export { SAMPLE_RATE };
