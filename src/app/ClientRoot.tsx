import React from "react";
import { useBlur } from "./providers/BlurProvider";

const ClientRoot = ({ children }: { children: React.ReactNode }) => {
  const { isBlur } = useBlur();
  return <main className={isBlur ? "blur-sm" : ""}>{children}</main>;
};

export default ClientRoot;
