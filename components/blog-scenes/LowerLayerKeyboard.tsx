"use client";

import { useCallback, useEffect, useState } from "react";

type KeyDef = {
  id: string;
  label: string;
  layerLabel?: string;
  width?: number;
  muted?: boolean;
  /** Left Alt — hold to activate the lower layer. */
  layerHold?: boolean;
};

/** Matches ~/.config/kanata/config.kbd `deflayer lower`. */
const ROWS: KeyDef[][] = [
  [
    { id: "tab", label: "tab", muted: true },
    { id: "q", label: "Q", layerLabel: "!" },
    { id: "w", label: "W", layerLabel: "@" },
    { id: "e", label: "E", layerLabel: "#" },
    { id: "r", label: "R", layerLabel: "$" },
    { id: "t", label: "T", layerLabel: "%" },
    { id: "y", label: "Y", layerLabel: "^" },
    { id: "u", label: "U", layerLabel: "&" },
    { id: "i", label: "I", layerLabel: "*" },
    { id: "o", label: "O", layerLabel: "(" },
    { id: "p", label: "P", layerLabel: ")" },
    { id: "bsp", label: "bsp", width: 1.5, muted: true },
  ],
  [
    { id: "ctrl", label: "ctrl", width: 1.25, muted: true },
    { id: "a", label: "A", layerLabel: "1" },
    { id: "s", label: "S", layerLabel: "2" },
    { id: "d", label: "D", layerLabel: "3" },
    { id: "f", label: "F", layerLabel: "4" },
    { id: "g", label: "G", layerLabel: "5" },
    { id: "h", label: "H", layerLabel: "6" },
    { id: "j", label: "J", layerLabel: "7" },
    { id: "k", label: "K", layerLabel: "8" },
    { id: "l", label: "L", layerLabel: "9" },
    { id: "semi", label: ";", layerLabel: "0" },
    { id: "quote", label: "'", layerLabel: "\\", width: 1.25 },
  ],
  [
    { id: "shift", label: "shift", width: 1.5, muted: true },
    { id: "z", label: "Z", layerLabel: "<" },
    { id: "x", label: "X", layerLabel: ">" },
    { id: "c", label: "C", layerLabel: "=" },
    { id: "v", label: "V", layerLabel: "-" },
    { id: "b", label: "B", layerLabel: "_" },
    { id: "n", label: "N", layerLabel: "+" },
    { id: "m", label: "M", layerLabel: "{" },
    { id: "comma", label: ",", layerLabel: "}" },
    { id: "dot", label: ".", layerLabel: "[" },
    { id: "slash", label: "/", layerLabel: "]" },
    { id: "ent", label: "shift", muted: true },
  ],
  [
    { id: "esc-l", label: "esc", width: 1.25, muted: true },
    { id: "meta", label: "meta", width: 1.25, muted: true },
    { id: "lalt", label: "alt", width: 1.25, muted: true, layerHold: true },
    { id: "space", label: "space", width: 6.25, muted: true },
    { id: "enter", label: "enter", width: 1.25, muted: true },
    { id: "esc-r", label: "esc", width: 1.25, muted: true },
  ],
];

function Key({
  keyDef,
  layerActive,
  onLayerHoldChange,
}: {
  keyDef: KeyDef;
  layerActive: boolean;
  onLayerHoldChange: (held: boolean) => void;
}) {
  const { label, layerLabel, width = 1, muted, layerHold } = keyDef;
  const showingLayer = layerActive && layerLabel != null;
  const display = showingLayer ? layerLabel : label;

  const baseClass = [
    "flex h-7 select-none items-center justify-center rounded-[0.3rem] border font-sans text-[0.55rem] font-medium tracking-wide sm:h-8 sm:text-[0.65rem] md:h-9 md:text-xs",
    showingLayer ? "normal-case" : "uppercase",
  ].join(" ");

  if (layerHold) {
    return (
      <button
        type="button"
        aria-label="Hold for lower layer"
        aria-pressed={layerActive}
        onPointerDown={(e) => {
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          onLayerHoldChange(true);
        }}
        onPointerUp={() => onLayerHoldChange(false)}
        onPointerCancel={() => onLayerHoldChange(false)}
        onLostPointerCapture={() => onLayerHoldChange(false)}
        className={[
          baseClass,
          "cursor-pointer touch-none outline-none transition-colors duration-100",
          layerActive
            ? "border-stone-400 bg-stone-600 text-stone-50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
            : "border-stone-500/80 bg-stone-800 text-stone-300 hover:border-stone-400 hover:text-stone-100",
        ].join(" ")}
        style={{ flex: `${width} 1 0`, minWidth: 0 }}
      >
        <span className="truncate px-0.5">{label}</span>
      </button>
    );
  }

  return (
    <div
      className={[
        baseClass,
        showingLayer
          ? "border-stone-500 bg-stone-700 text-stone-50"
          : muted
            ? "border-stone-700/80 bg-stone-900/80 text-stone-500"
            : "border-stone-600/70 bg-stone-800 text-stone-200",
        showingLayer ? "transition-colors duration-100" : "",
      ].join(" ")}
      style={{ flex: `${width} 1 0`, minWidth: 0 }}
      aria-hidden
    >
      <span className="truncate px-0.5">{display}</span>
    </div>
  );
}

export default function LowerLayerKeyboard() {
  const [layerActive, setLayerActive] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);

  const setHeld = useCallback((held: boolean) => {
    setLayerActive(held);
  }, []);

  // Physical Left Alt while hovering the board (matches the post copy).
  useEffect(() => {
    if (!pointerOver) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "AltLeft" || e.repeat) return;
      e.preventDefault();
      setLayerActive(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pointerOver]);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "AltLeft") setLayerActive(false);
    };
    const onBlur = () => setLayerActive(false);

    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <figure
      className="my-8"
      onPointerEnter={() => setPointerOver(true)}
      onPointerLeave={() => setPointerOver(false)}
    >
      <div
        className={[
          "flex w-full flex-col gap-1 rounded-xl border bg-stone-950/60 p-2.5 sm:gap-1.5 sm:p-3.5",
          layerActive ? "border-stone-500/80" : "border-stone-700/60",
        ].join(" ")}
        role="group"
        aria-label="Keyboard with holdable left alt for the lower layer"
      >
        {ROWS.map((row, i) => (
          <div key={i} className="flex w-full gap-1 sm:gap-1.5">
            {row.map((keyDef) => (
              <Key
                key={keyDef.id}
                keyDef={keyDef}
                layerActive={layerActive}
                onLayerHoldChange={setHeld}
              />
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center font-serif text-sm italic text-stone-500">
        {layerActive
          ? "lower layer — numbers and symbols"
          : "hold left alt (on the board, or your keyboard while hovering)"}
      </figcaption>
    </figure>
  );
}
