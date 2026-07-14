type KeyDef = {
  label: string;
  /** Width in key units (1 = alphanumeric). */
  width?: number;
  muted?: boolean;
};

/** Classic staggered ~40% QWERTY (no number row). Each row totals 12.5u. */
const ROWS: KeyDef[][] = [
  [
    { label: "tab", muted: true },
    { label: "Q" },
    { label: "W" },
    { label: "E" },
    { label: "R" },
    { label: "T" },
    { label: "Y" },
    { label: "U" },
    { label: "I" },
    { label: "O" },
    { label: "P" },
    { label: "bsp", width: 1.5, muted: true },
  ],
  [
    { label: "ctrl", width: 1.25, muted: true },
    { label: "A" },
    { label: "S" },
    { label: "D" },
    { label: "F" },
    { label: "G" },
    { label: "H" },
    { label: "J" },
    { label: "K" },
    { label: "L" },
    { label: ";" },
    { label: "'", width: 1.25 },
  ],
  [
    { label: "shift", width: 1.5, muted: true },
    { label: "Z" },
    { label: "X" },
    { label: "C" },
    { label: "V" },
    { label: "B" },
    { label: "N" },
    { label: "M" },
    { label: "," },
    { label: "." },
    { label: "/" },
    { label: "shift", muted: true },
  ],
  [
    { label: "esc", width: 1.25, muted: true },
    { label: "meta", width: 1.25, muted: true },
    { label: "alt", width: 1.25, muted: true },
    { label: "space", width: 6.25, muted: true },
    { label: "enter", width: 1.25, muted: true },
    { label: "esc", width: 1.25, muted: true },
  ],
];

function Key({ label, width = 1, muted }: KeyDef) {
  return (
    <div
      className={[
        "flex h-7 items-center justify-center rounded-[0.3rem] border font-sans text-[0.55rem] font-medium uppercase tracking-wide sm:h-8 sm:text-[0.65rem] md:h-9 md:text-xs",
        muted
          ? "border-stone-700/80 bg-stone-900/80 text-stone-500"
          : "border-stone-600/70 bg-stone-800 text-stone-200",
      ].join(" ")}
      style={{ flex: `${width} 1 0`, minWidth: 0 }}
      aria-hidden
    >
      <span className="truncate px-0.5">{label}</span>
    </div>
  );
}

export default function NormalKeyboard() {
  return (
    <figure className="my-8">
      <div
        className="flex w-full flex-col gap-1 rounded-xl border border-stone-700/60 bg-stone-950/60 p-2.5 sm:gap-1.5 sm:p-3.5"
        role="img"
        aria-label="A normal staggered 40 percent QWERTY keyboard layout"
      >
        {ROWS.map((row, i) => (
          <div key={i} className="flex w-full gap-1 sm:gap-1.5">
            {row.map((key, j) => (
              <Key key={`${i}-${j}-${key.label}`} {...key} />
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center font-serif text-sm italic text-stone-500">
        a normal ~40% keyboard — no number row, still plenty of keys
      </figcaption>
    </figure>
  );
}
