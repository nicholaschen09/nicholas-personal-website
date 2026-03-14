'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

type Segment = { type: 'text'; value: string } | { type: 'inline'; value: string } | { type: 'display'; value: string };

function parseMathText(text: string): Segment[] {
  const segments: Segment[] = [];
  let lastIndex = 0;
  const re = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
  let match;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      segments.push({ type: 'inline', value: match[1].trim() });
    } else if (match[2] !== undefined) {
      segments.push({ type: 'display', value: match[2].trim() });
    }
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments;
}

function renderLatex(latex: string, displayMode: boolean): string {
  return katex.renderToString(latex, {
    displayMode,
    throwOnError: false,
    errorColor: '#f44336',
  });
}

export default function MathText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const segments = parseMathText(text);

  if (segments.length === 1 && segments[0].type === 'text') {
    return <span className={className}>{segments[0].value}</span>;
  }

  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.type === 'text') {
          return <span key={i}>{seg.value}</span>;
        }
        if (seg.type === 'inline') {
          return (
            <span
              key={i}
              className="inline-[.katex]"
              dangerouslySetInnerHTML={{ __html: renderLatex(seg.value, false) }}
            />
          );
        }
        return (
          <span
            key={i}
            className="my-5 block [.katex]:text-center"
            dangerouslySetInnerHTML={{ __html: renderLatex(seg.value, true) }}
          />
        );
      })}
    </span>
  );
}
