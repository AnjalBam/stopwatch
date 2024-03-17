"use client";

import { Button } from "@/ui/components/Button";
import { PlayIcon, CirclePause, RotateCcw } from "lucide-react";

type ActionButtonProps = {
  action: () => void;
  Icon: JSX.Element;
  text?: string;
  isMuted?: boolean;
};

export default function TimerActions({
  resume,
  pause,
  reset,
  stop,
  getTimerState,
}: any) {
  const actionButtons: ActionButtonProps[] = [
    {
      action: getTimerState() === "PLAYING" ? pause : resume,
      Icon: (
        <>{getTimerState() === "PLAYING" ? <CirclePause /> : <PlayIcon />}</>
      ),
      text: getTimerState() === "PLAYING" ? "Pause" : "Resume",
    },
    {
      action: reset,
      Icon: <RotateCcw />,
      text: "Reset",
    },
  ];
  return (
    <div className="flex gap-4 justify-center align-center w-full mt-4">
      {actionButtons.map((button, index) => (
        <TimerActionButton
          key={index}
          {...button}
          isMuted={getTimerState() === "PLAYING"}
        />
      ))}
    </div>
  );
}

function TimerActionButton({
  action,
  Icon,
  text = "",
  isMuted = false,
}: ActionButtonProps) {
  return (
    <Button
      className={`p-2 transition-all bg-[#ffffff05] backdrop-filter backdrop-blur-xl hover:bg-[#ffffff10] rounded-lg shadow-lg ${isMuted ? "text-zinc-500" : ""} hover:text-white`}
      onClick={action}
      title={text}
    >
      {Icon}
    </Button>
  );
}
