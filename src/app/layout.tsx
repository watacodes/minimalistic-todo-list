import "./globals.css";
import { TodosProvider } from "./providers/TodosProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TodosProvider>
        <body className="m-auto p-0 min-h-dvh max-h-dvw">{children}</body>
      </TodosProvider>
    </html>
  );
}
