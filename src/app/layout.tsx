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
  title: "Adnan — Mobile & Product Engineer",
  description:
    "Портфолио Аднана: Flutter, Android, iOS, backend и web. Adnan's portfolio: product architecture and engineering.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${unbounded.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var r=document.documentElement;var t=localStorage.getItem("portfolio-theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";var l=localStorage.getItem("portfolio-locale");if(l==="ru"||l==="en")r.lang=l}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
