"use client";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f0f0f0] m-auto p-0 min-h-vwh max-h-vwh">
        {children}
      </body>
    </html>
  );
}
