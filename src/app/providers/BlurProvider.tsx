"use client";

import { createContext, useContext, useState } from "react";

type BlurCtx = {
  isBlur: boolean;
  toggleBlur: () => void;
  setIsBlur: (v: boolean) => void;
};

const BlurContext = createContext<BlurCtx | null>(null);

export const BlurProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBlur, setIsBlur] = useState<boolean>(false);
  const toggleBlur = () => {
    setIsBlur((prev) => !prev);
  };
  return (
    <>
      <BlurContext.Provider value={{ isBlur, setIsBlur, toggleBlur }}>
        {children}
      </BlurContext.Provider>
    </>
  );
};

export const useBlur = () => {
  const ctx = useContext(BlurContext);
  if (!ctx) throw new Error("useBlur issue");
  return ctx;
};
