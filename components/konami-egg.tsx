"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const EGG_COLORS = [
  "#0ea5ff",
  "#22e0a0",
  "#ff7a3d",
  "#ffd23f",
  "#ff4fd8",
  "#ffffff",
];
const FIREWORKS_DURATION = 3500;
const JUMPSCARE_DURATION = 2600;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function fireFireworks(): () => void {
  const animationEnd = Date.now() + FIREWORKS_DURATION;
  const defaults = {
    startVelocity: 45,
    spread: 360,
    ticks: 80,
    scalar: 1.3,
    colors: EGG_COLORS,
    zIndex: 120,
  };

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      window.clearInterval(interval);
      return;
    }
    const particleCount = 90 * (timeLeft / FIREWORKS_DURATION);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);

  return () => {
    window.clearInterval(interval);
    confetti.reset();
  };
}

function playNootNoot(): HTMLAudioElement | null {
  try {
    const audio = new Audio("/noot_p0CPOIz.mp3");
    audio.volume = 0.7;
    void audio.play();
    return audio;
  } catch {
    // Playback blocked (autoplay policy, etc.) — fail silently.
    return null;
  }
}

export function KonamiEgg() {
  const [found, setFound] = useState(false);
  const stopFireworksRef = useRef<(() => void) | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dismissTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    console.log(
      "%cpsst. there's a cheat code hiding on this page. \u{1F47E}",
      "font-size:13px;font-weight:bold;color:#4f9fe0;",
    );
  }, []);

  useEffect(() => {
    let progress = 0;

    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[progress];

      if (key === expected) {
        progress++;
        if (progress === SEQUENCE.length) {
          progress = 0;
          fireEasterEgg();
        }
      } else {
        progress = key === SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function fireEasterEgg() {
    setFound(true);
    stopFireworksRef.current = fireFireworks();
    audioRef.current = playNootNoot();
    dismissTimeoutRef.current = window.setTimeout(dismiss, JUMPSCARE_DURATION);
  }

  function dismiss() {
    setFound(false);
    stopFireworksRef.current?.();
    stopFireworksRef.current = null;
    audioRef.current?.pause();
    audioRef.current = null;
    if (dismissTimeoutRef.current !== null) {
      window.clearTimeout(dismissTimeoutRef.current);
      dismissTimeoutRef.current = null;
    }
  }

  if (!found) return null;

  return (
    <div
      onClick={dismiss}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-foreground/80 cursor-pointer"
    >
      <img
        src="https://media.giphy.com/media/sy23M3VeBGkvK/giphy.gif"
        alt="Pingu noot noot"
        className="w-[min(85vw,40rem)] h-auto object-contain drop-shadow-[8px_12px_0_rgba(0,0,0,0.35)]"
        style={{ animation: "egg-pop 350ms ease-out" }}
      />
    </div>
  );
}
