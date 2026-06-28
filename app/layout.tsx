import type { Metadata } from "next";
import { body, display } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Solène — Cuisine gastronomique",
  description:
    "Maison Solène, table gastronomique au cœur de Lyon. Une cuisine de saison, signée par le chef Adrien Vasseur, où chaque assiette raconte un terroir.",
  openGraph: {
    title: "Maison Solène — Cuisine gastronomique",
    description:
      "Une cuisine de saison où chaque assiette raconte un terroir. Réservez votre table.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
