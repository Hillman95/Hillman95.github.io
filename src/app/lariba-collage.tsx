import Image from "next/image";

type Locale = "ru" | "en";

const copy = {
  ru: {
    label: "Скриншоты ЛяРиба",
    alts: [
      "ЛяРиба — документы",
      "ЛяРиба — каталог",
      "ЛяРиба — калькулятор",
      "ЛяРиба — заявки",
      "ЛяРиба — оформление",
    ],
  },
  en: {
    label: "Lariba screenshots",
    alts: [
      "Lariba — documents",
      "Lariba — catalog",
      "Lariba — calculator",
      "Lariba — applications",
      "Lariba — checkout",
    ],
  },
} satisfies Record<Locale, { label: string; alts: string[] }>;

const sources = [
  "/projects/lariba/ios-1.webp",
  "/projects/lariba/ios-2.webp",
  "/projects/lariba/ios-3.webp",
  "/projects/lariba/ios-4.webp",
  "/projects/lariba/android-1.webp",
] as const;

export function LaribaCollage({ locale }: { locale: Locale }) {
  const localized = copy[locale];

  return (
    <div className="lariba-collage" aria-label={localized.label}>
      {sources.map((src, index) => (
        <figure
          key={src}
          className={`lariba-phone lariba-phone-${index + 1}`}
        >
          <Image
            src={src}
            alt={localized.alts[index]}
            width={260}
            height={564}
            sizes="(max-width: 900px) 120px, 160px"
          />
        </figure>
      ))}
    </div>
  );
}
