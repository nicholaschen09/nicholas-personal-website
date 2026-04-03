'use client';

import { memo, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

/** Rows in the ASCII grid (fixed height). */
const ROWS = 32;
/** Supersamples per cell (spatial anti-aliasing, à la Alex Harri). */
const SS = 2;

const COLS_MIN = 48;
const COLS_MAX = 220;

/**
 * Printable characters sorted from light / sparse → dark / dense.
 * Luminance maps to index (bright → left, dark → right).
 */
const CHARS = ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvcXVYCJFTLUQOZmwqpdbkhao*#MW&8%B@$';

function luminance(r: number, g: number, b: number) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function measureCols(widthPx: number, font: string): number {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 80;
  ctx.font = font;
  const cw = ctx.measureText('M').width;
  if (!cw || !Number.isFinite(cw)) return 80;
  return Math.max(COLS_MIN, Math.min(COLS_MAX, Math.floor(widthPx / cw)));
}

function AsciiTorusCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);

  useLayoutEffect(() => {
    const pre = preRef.current;
    const container = containerRef.current;
    if (!pre || !container) return;

    const charAspect = 0.58;
    let cols = measureCols(container.getBoundingClientRect().width, getComputedStyle(pre).font);
    let disposeThree: (() => void) | null = null;

    const buildThree = (COLS: number) => {
      const IW = COLS * SS;
      const IH = ROWS * SS;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a1a1a);

      const camera = new THREE.PerspectiveCamera(42, (COLS * charAspect) / ROWS, 0.1, 100);
      camera.position.set(0.1, 0.07, 4.52);
      camera.lookAt(0, 0, 0);

      const geometry = new THREE.TorusGeometry(0.96, 0.37, 32, 80);
      const material = new THREE.MeshLambertMaterial({ color: 0xe899a8 });
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);

      scene.add(new THREE.AmbientLight(0xffffff, 0.52));
      const key = new THREE.DirectionalLight(0xffffff, 0.78);
      key.position.set(2.8, 3.5, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xa8c8ff, 0.22);
      fill.position.set(-3, -1, 2);
      scene.add(fill);

      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
      renderer.setPixelRatio(1);
      renderer.setSize(IW, IH, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const rt = new THREE.WebGLRenderTarget(IW, IH, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        depthBuffer: true,
        type: THREE.UnsignedByteType,
        format: THREE.RGBAFormat,
      });

      const buffer = new Uint8Array(IW * IH * 4);

      function enhance(l: number, frameMax: number) {
        const m = Math.max(0.06, frameMax);
        let v = l / m;
        v = Math.min(1, v);
        v = Math.pow(v, 1.12);
        return v;
      }

      const tick = () => {
        rafRef.current = requestAnimationFrame(tick);
        torus.rotation.x += 0.0068;
        torus.rotation.y += 0.0105;

        renderer.setRenderTarget(rt);
        renderer.render(scene, camera);
        renderer.readRenderTargetPixels(rt, 0, 0, IW, IH, buffer);
        renderer.setRenderTarget(null);

        let frameMax = 0;
        for (let i = 0; i < buffer.length; i += 4) {
          const L = luminance(buffer[i] / 255, buffer[i + 1] / 255, buffer[i + 2] / 255);
          if (L > frameMax) frameMax = L;
        }

        const lines: string[] = [];
        for (let row = 0; row < ROWS; row++) {
          let line = '';
          for (let col = 0; col < COLS; col++) {
            let sum = 0;
            let n = 0;
            for (let sy = 0; sy < SS; sy++) {
              for (let sx = 0; sx < SS; sx++) {
                const px = col * SS + sx;
                const py = IH - 1 - (row * SS + sy);
                const idx = (py * IW + px) * 4;
                const L = luminance(
                  buffer[idx] / 255,
                  buffer[idx + 1] / 255,
                  buffer[idx + 2] / 255,
                );
                sum += L;
                n++;
              }
            }
            const avg = sum / n;
            const v = enhance(avg, frameMax);
            const charIdx = Math.min(CHARS.length - 1, Math.floor((1 - v) * (CHARS.length - 1)));
            line += CHARS[charIdx];
          }
          lines.push(line);
        }
        pre.textContent = lines.join('\n');
      };

      tick();

      return () => {
        cancelAnimationFrame(rafRef.current);
        geometry.dispose();
        material.dispose();
        rt.dispose();
        renderer.dispose();
      };
    };

    disposeThree = buildThree(cols);

    const ro = new ResizeObserver(() => {
      const next = measureCols(container.getBoundingClientRect().width, getComputedStyle(pre).font);
      if (next === cols) return;
      cols = next;
      disposeThree?.();
      disposeThree = buildThree(cols);
    });

    ro.observe(container);

    return () => {
      ro.disconnect();
      disposeThree?.();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <pre
        ref={preRef}
        className="block w-full overflow-hidden text-center font-mono text-[8px] leading-[1.06] tracking-[0.01em] text-stone-300 selection:bg-stone-700 sm:text-[9px] md:text-[10px]"
        aria-label="ASCII 3D torus animation"
      />
    </div>
  );
}

/** No props: memo avoids parent re-renders (e.g. language) clearing imperative `textContent`. */
export default memo(AsciiTorusCanvas);
