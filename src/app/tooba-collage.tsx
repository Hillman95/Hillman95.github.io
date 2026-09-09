import Image from "next/image";

type Locale = "ru" | "en";

const copy = {
  ru: {
    label: "Скриншоты Tooba",
    alts: ["главная", "фонды", "пожертвование", "профиль", "история"],
  },
  en: {
    label: "Tooba screenshots",
    alts: ["home", "charities", "donation", "profile", "history"],
  },
} satisfies Record<Locale, { label: string; alts: string[] }>;

const sources = [
  "/projects/tooba/ios-1.webp",
  "/projects/tooba/ios-2.webp",
  "/projects/tooba/ios-3.webp",
  "/projects/tooba/ios-4.webp",
  "/projects/tooba/ios-5.webp",
] as const;

export function ToobaCollage({ locale }: { locale: Locale }) {
  const localized = copy[locale];

  return (
    <div className="tooba-collage" role="group" aria-label={localized.label}>
      {sources.map((src, index) => (
        <figure
          key={src}
          className={`tooba-phone tooba-phone-${index + 1}`}
        >
          <Image
            src={src}
            alt={`Tooba — ${localized.alts[index]}`}
            width={260}
            height={564}
            sizes="(max-width: 900px) 120px, 160px"
          />
        </figure>
      ))}
    </div>
  );
}
