import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-offwhite-500 m-auto p-0 min-h-dwh max-h-dwh">
        {children}
      </body>
    </html>
  );
}
