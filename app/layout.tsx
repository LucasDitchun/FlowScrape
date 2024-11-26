import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScrapeFlow: Crie Web Scrapers Visuais com AI e Automação",
  description:
    "ScrapeFlow é uma plataforma de automação para criar web scrapers visuais com inteligência artificial. Construa workflows eficientes, seguros e integrados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
