"use client";

import ClientRoot from "./ClientRoot";
import "./globals.css";
import { BlurProvider } from "./providers/BlurProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-auto p-0 min-h-dvh max-h-dvw">
        <BlurProvider>
          <ClientRoot>{children}</ClientRoot>
        </BlurProvider>
      </body>
    </html>
  );
}
