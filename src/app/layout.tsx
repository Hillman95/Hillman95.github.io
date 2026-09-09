import type { Metadata } from "next";
import { IBM_Plex_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Аднан — Mobile & Product Engineer",
  description:
    "Портфолио Аднана: Flutter, Android, iOS, backend и web. Архитектура и продуктовые решения для ЦПУ билайн, ЛяРиба, Dirham, Tooba и WeCompete.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${ibmPlexSans.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
