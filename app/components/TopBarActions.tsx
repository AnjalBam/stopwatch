"use client";

import { Bolt } from "lucide-react";
import { useEffect, useState } from "react";
import cx from "clsx";
import { Button } from "@/ui/components/Button";

type ThemeOptionType = {
  displayName: string;
  value: string;
};

export function TopBarActions({ changeClockStyle, isMuted = false }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const ThemeOptions: ThemeOptionType[] = [
    {
      displayName: "Classic",
      value: "classic",
    },
    {
      displayName: "Modern",
      value: "modern",
    },
    {
      displayName: "Digital",
      value: "digital",
    },
  ];

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="absolute top-[1rem] right-[1rem]">
      <div className="dropdown-wrapper relative">
        <Button
          className={cx("cursor-pointer", { "bg-[#ffffff15]": isOpen })}
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          isMuted={isMuted}
        >
          <Bolt />
        </Button>
        <div
          className={cx(
            "dropdown-items absolute top-full right-0",
            "bg-[#ffffff10]",
            "flex flex-col gap-1",
            "px-2 py-1 mt-2",
            "rounded shadow-md",
            {
              hidden: !isOpen,
            },
          )}
        >
          {ThemeOptions.map((themeOption) => (
            <div
              key={themeOption.value}
              className={cx(
                "dropdown-item",
                "min-w-[150px] text-sm",
                "hover:bg-[#ffffff20]",
                "px-2 py-1 rounded",
                "cursor-pointer",
              )}
              onClick={() => {
                changeClockStyle(themeOption.value);
                closeDropdown();
              }}
            >
              {themeOption.displayName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
