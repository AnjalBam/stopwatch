"use client";

import TimerActions from "./components/TimerActions";
import { useTimer } from "@joseavilasg/react-compound-timer";
import ShortcutActions from "./components/ShortcutActions";
import { useCallback, useEffect } from "react";
import useClockStyle from "@/hooks/useClockStyle";
import { TopBarActions } from "./components/TopBarActions";
import { Heart } from "lucide-react";

export default function StopWatch() {
  const formatValue = (v: any) => {
    return v.toString().padStart(2, "0");
  };
  const timer = useTimer({
    initialTime: 0,
    startImmediately: false,
    timeToUpdate: 10,
    lastUnit: "h",
  });

  const { font, changeClockStyle } = useClockStyle();

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "r" || e.key === "R") {
        timer.controls.reset();
      }

      if (e.key === "f" || e.key === "F") {
        toggleFullScreen();
      }
      if (e.key === " ") {
        if (timer.controls.getTimerState() === "PLAYING") {
          timer.controls.pause();
        } else {
          timer.controls.resume();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [timer.controls, toggleFullScreen]);
  return (
    <section className="w-scren h-screen bg-zinc-900 text-white">
      <TopBarActions
        isMuted={timer.controls.getTimerState() === "PLAYING"}
        changeClockStyle={changeClockStyle}
      />
      <div
        className={`flex justify-center items-center h-full mx-auto ${font.className}`}
      >
        <div className="mt-[-100px]">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center">
              {formatValue(timer.value.h)} : {formatValue(timer.value.m)} :{" "}
              {formatValue(timer.value.s)}
            </h1>
          </div>
          <TimerActions {...timer.controls} />
        </div>
      </div>
      <ShortcutActions
        {...timer.controls}
        toggleFullScreen={toggleFullScreen}
      />
      <p className="absolute bottom-1 right-1 text-xs text-zinc-600">
        with &#10084;{" "}
        <a href="https://anjalbam.com.np" className="hover:underline">
          Anjal Bam
        </a>
      </p>
    </section>
  );
}
