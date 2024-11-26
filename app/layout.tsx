import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "./_components/providers/AppProviders";

export const metadata: Metadata = {
  title: "FlowScrape: Crie Web Scrapers Visuais com AI e Automação",
  description:
    "FlowScrape é uma plataforma de automação para criar web scrapers visuais com inteligência artificial. Construa workflows eficientes, seguros e integrados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
