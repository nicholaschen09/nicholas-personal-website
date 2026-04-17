'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const MP3_SRC = '/blogs/lossless-audio/heather.mp3';
const FLAC_SRC = '/blogs/lossless-audio/heather.flac';
const NUM_BARS = 80;
const BAR_GAP = 1.2;
const BAR_WIDTH = 3;
const VIS_HEIGHT = 56;

type Format = 'mp3' | 'flac' | null;

export default function LosslessComparisonPlayer() {
  const mp3Ref = useRef<HTMLAudioElement>(null);
  const flacRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mp3SourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const flacSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  const [playing, setPlaying] = useState<Format>(null);
  const [activeFormat, setActiveFormat] = useState<Format>('flac');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const activeAudio =
    activeFormat === 'mp3' ? mp3Ref.current : activeFormat === 'flac' ? flacRef.current : null;

  const connectAndPlay = useCallback((format: Format) => {
    const audio = format === 'mp3' ? mp3Ref.current : flacRef.current;
    if (!audio) return;

    const other = format === 'mp3' ? flacRef.current : mp3Ref.current;
    other?.pause();
    if (other && Number.isFinite(other.currentTime)) {
      audio.currentTime = other.currentTime;
      setCurrentTime(other.currentTime);
    }

    let ctx = contextRef.current;
    if (!ctx) {
      ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      contextRef.current = ctx;
    }

    if (ctx.state === 'suspended') ctx.resume();

    let analyser = analyserRef.current;
    if (!analyser) {
      analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.7;
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
      analyser.connect(ctx.destination);
    }

    const mp3Source = mp3SourceRef.current;
    const flacSource = flacSourceRef.current;
    try {
      mp3Source?.disconnect();
      flacSource?.disconnect();
    } catch {
      /* already disconnected */
    }

    if (format === 'mp3') {
      if (!mp3SourceRef.current && mp3Ref.current) {
        mp3SourceRef.current = ctx.createMediaElementSource(mp3Ref.current);
      }
      mp3SourceRef.current?.connect(analyser);
    } else {
      if (!flacSourceRef.current && flacRef.current) {
        flacSourceRef.current = ctx.createMediaElementSource(flacRef.current);
      }
      flacSourceRef.current?.connect(analyser);
    }

    audio.play().catch(() => {});
    setPlaying(format);
    setActiveFormat(format);
  }, []);

  const stop = useCallback(() => {
    mp3Ref.current?.pause();
    flacRef.current?.pause();
    setPlaying(null);
  }, []);

  const selectFormat = useCallback(
    (format: Format) => {
      const other = format === 'mp3' ? flacRef.current : mp3Ref.current;
      const audio = format === 'mp3' ? mp3Ref.current : flacRef.current;
      if (audio && other && Number.isFinite(other.currentTime)) {
        audio.currentTime = other.currentTime;
        setCurrentTime(other.currentTime);
      }
      setActiveFormat(format);
      if (playing && playing !== format) {
        connectAndPlay(format);
      }
    },
    [playing, connectAndPlay],
  );

  const togglePlayPause = useCallback(() => {
    if (!activeFormat) return;
    const audio = activeFormat === 'mp3' ? mp3Ref.current : flacRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(null);
    } else {
      connectAndPlay(activeFormat);
    }
  }, [activeFormat, playing, connectAndPlay]);

  const handleSeek = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const t = Number(e.target.value);
      setCurrentTime(t);
      const audio =
        activeFormat === 'mp3' ? mp3Ref.current : activeFormat === 'flac' ? flacRef.current : null;
      if (audio) audio.currentTime = t;
    },
    [activeFormat],
  );

  function formatTime(s: number) {
    if (!Number.isFinite(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    const audio = playing === 'mp3' ? mp3Ref.current : playing === 'flac' ? flacRef.current : null;
    if (!audio) return;
    const onEnded = () => setPlaying(null);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [playing]);

  useEffect(() => {
    const audio = activeAudio;
    if (!audio) return;
    const onTimeUpdate = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onDurationChange = () => setDuration(audio.duration);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('durationchange', onDurationChange);
    if (Number.isFinite(audio.duration)) setDuration(audio.duration);
    setCurrentTime(audio.currentTime);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('durationchange', onDurationChange);
    };
  }, [activeFormat, isSeeking]);

  useEffect(() => {
    if (!activeFormat) return;
    const a = activeFormat === 'mp3' ? mp3Ref.current : flacRef.current;
    if (a && Number.isFinite(a.duration)) setDuration(a.duration);
  }, [activeFormat]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;
    if (!canvas || !analyser || !dataArray || !activeFormat) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const barTotalWidth = BAR_WIDTH + BAR_GAP;
    const maxBars = Math.min(NUM_BARS, Math.floor(w / barTotalWidth));
    const binStep = Math.max(1, Math.floor(analyser.frequencyBinCount / maxBars));

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = 'rgb(26 26 26)';
      ctx.fillRect(0, 0, w, h);

      const color = activeFormat === 'flac' ? 'rgb(163 230 53)' : 'rgb(251 146 60)';
      ctx.fillStyle = color;

      for (let i = 0; i < maxBars; i++) {
        const idx = Math.min(i * binStep, dataArray.length - 1);
        const value = dataArray[idx] ?? 0;
        const barH = (value / 255) * (h - 4);
        const x = i * barTotalWidth;
        const y = h - barH;
        ctx.fillRect(x, y, BAR_WIDTH, Math.max(2, barH));
      }
    };

    draw();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeFormat, playing]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      mp3Ref.current?.pause();
      flacRef.current?.pause();
      contextRef.current?.close();
    };
  }, []);

  return (
    <>
      <figure className="my-6 rounded-lg border border-stone-700 bg-stone-900/50 p-4">
        <audio ref={mp3Ref} src={MP3_SRC} preload="metadata" />
        <audio ref={flacRef} src={FLAC_SRC} preload="metadata" />

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => selectFormat('mp3')}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              activeFormat === 'mp3'
                ? playing
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-600 text-stone-200'
                : 'bg-stone-700 text-stone-300 hover:bg-orange-500/10 hover:text-orange-500'
            }`}
          >
            MP3
          </button>
          <button
            type="button"
            onClick={() => selectFormat('flac')}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              activeFormat === 'flac'
                ? playing
                  ? 'bg-lime-600 text-white'
                  : 'bg-stone-600 text-stone-200'
                : 'bg-stone-700 text-stone-300 hover:bg-orange-500/10 hover:text-orange-500'
            }`}
          >
            FLAC
          </button>
          {activeFormat && (
            <span className="text-[10px] text-stone-500">
              Visualizer: {activeFormat.toUpperCase()}
            </span>
          )}
        </div>

        <div className="mb-3 flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlayPause}
            disabled={!activeFormat}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-200 transition-colors hover:bg-orange-500/10 hover:text-orange-500 disabled:opacity-40 disabled:pointer-events-none"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
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
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            onMouseDown={() => setIsSeeking(true)}
            onMouseUp={() => setIsSeeking(false)}
            onPointerLeave={() => setIsSeeking(false)}
            className="lossless-audio-slider h-1 flex-1 accent-lime-500"
            aria-label="Seek"
          />
          <span className="w-16 shrink-0 text-right text-[10px] tabular-nums text-stone-500">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <canvas
          ref={canvasRef}
          width={NUM_BARS * (BAR_WIDTH + BAR_GAP)}
          height={VIS_HEIGHT}
          className="w-full max-w-full rounded border border-stone-700"
          style={{ height: VIS_HEIGHT }}
        />

        <div className="mt-2 flex items-center gap-4 pl-0 text-[10px] text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-sm bg-amber-500/90" />
            MP3
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-sm bg-lime-500/90" />
            FLAC
          </span>
        </div>
      </figure>
      <p className="mt-2 text-sm italic text-stone-400">
        Note: It’s really hard to tell the difference for most people.
      </p>
    </>
  );
}
