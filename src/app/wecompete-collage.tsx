import Image from "next/image";

type Locale = "ru" | "en";

const copy = {
  ru: {
    label: "Экраны приложения Competitor",
    alts: [
      "Competitor — список событий",
      "Competitor — детали турнира и оплата",
      "Competitor — профиль спортсмена",
      "Competitor — виджет на Home Screen",
      "Competitor — страница в App Store",
    ],
  },
  en: {
    label: "Competitor app screens",
    alts: [
      "Competitor — events list",
      "Competitor — tournament details and payment",
      "Competitor — athlete profile",
      "Competitor — Home Screen widget",
      "Competitor — App Store listing",
    ],
  },
} satisfies Record<Locale, { label: string; alts: string[] }>;

const sources = [
  "/projects/wecompete/ios-4.webp",
  "/projects/wecompete/ios-2.webp",
  "/projects/wecompete/ios-3.webp",
  "/projects/wecompete/ios-1.webp",
  "/projects/wecompete/ios-5.webp",
] as const;

export function WecompeteCollage({ locale }: { locale: Locale }) {
  const localized = copy[locale];

  return (
    <div className="wecompete-collage" role="group" aria-label={localized.label}>
      {sources.map((src, index) => (
        <figure
          key={src}
          className={`wecompete-phone wecompete-phone-${index + 1}`}
        >
          <Image
            src={src}
            alt={localized.alts[index]}
            width={780}
            height={1691}
            sizes="(max-width: 900px) 120px, 160px"
          />
        </figure>
      ))}
      <Image
        className="wecompete-icon"
        src="/projects/wecompete/app-icon.webp"
        alt=""
        width={72}
        height={72}
      />
    </div>
  );
}
