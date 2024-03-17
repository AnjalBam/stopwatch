"use client";

import { useCallback, useEffect, useState } from "react";

import { unna, iceberg, digital } from "@/lib/fonts";
import { NextFont } from "next/dist/compiled/@next/font";

const CLOCK_LS_KEY = "timer-anjal-clock-style";

const fontOptions: { [key: string]: NextFont } = {
  classic: unna,
  modern: iceberg,
  digital: digital,
};

const useClockStyle = () => {
  const [font, setFont] = useState<NextFont>(fontOptions.classic);

  const getPreferredClockStyle = useCallback(() => {
    const preferredClockStyle = localStorage.getItem(CLOCK_LS_KEY);
    return fontOptions[preferredClockStyle || "classic"];
  }, []);

  const setPreferredClockStyle = useCallback((clockStyle: string) => {
    localStorage.setItem(CLOCK_LS_KEY, clockStyle);
  }, []);

  useEffect(() => {
    setFont(getPreferredClockStyle());
  }, [getPreferredClockStyle]);

  const changeClockStyle = (clockStyle: string) => {
    setFont(fontOptions[clockStyle] || fontOptions.classic);
    setPreferredClockStyle(clockStyle);
  };

  return { font, changeClockStyle };
};

export default useClockStyle;
