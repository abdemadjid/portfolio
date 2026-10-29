import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { content } from "@/lib/content";
import "./globals.css";

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: content.fr.meta.title,
  description: content.fr.meta.description,
  authors: [{ name: "Abdelmadjid Menad" }],
  keywords: [
    "cybersécurité",
    "SIEM",
    "SOC",
    "Wazuh",
    "Suricata",
    "ELK",
    "MITRE ATT&CK",
    "IA explicable",
    "Algérie",
  ],
  openGraph: {
    title: content.fr.meta.title,
    description: content.fr.meta.description,
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1117",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
