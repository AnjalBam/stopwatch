"use client";

import { newsreader } from "@/lib/fonts";
import Timer from "@joseavilasg/react-compound-timer";
import TimerActions from "./components/TimerActions";

export default function StopWatch() {
  return (
    <section className="w-scren h-screen bg-zinc-900 text-white">
      <div
        className={`flex justify-center pt-20 mx-auto p-4 ${newsreader.className}`}
      >
        <Timer
          initialTime={0}
          startImmediately={false}
          timeToUpdate={10}
          lastUnit="h"
          formatValue={(v: any) => {
            return v.toString().padStart(2, "0");
          }}
        >
          {(timerProps: any) => (
            <div>
              <div>
                <h1 className="text-6xl font-bold text-center">
                  <Timer.Hours /> : <Timer.Minutes /> : <Timer.Seconds />
                </h1>
              </div>
              <TimerActions {...timerProps} />
            </div>
          )}
        </Timer>
      </div>
    </section>
  );
}
