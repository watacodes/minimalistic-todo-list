"use client";

import { useEffect } from "react";

type KeyProps = {
  key: string;
  handler: (e: KeyboardEvent) => void;
};

const useGlobalKey = ({ key, handler }: KeyProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) handler(e);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [key, handler]);
};

export default useGlobalKey;
