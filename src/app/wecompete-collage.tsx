import Image from "next/image";

type Locale = "ru" | "en";

const copy = {
  ru: {
    label: "Экраны приложения Competitor",
    alts: [
      "Competitor — список турниров",
      "Competitor — детали события",
      "Competitor — профиль спортсмена",
      "Competitor — результат матча",
      "Competitor — информация о турнире",
    ],
  },
  en: {
    label: "Competitor app screens",
    alts: [
      "Competitor — tournament list",
      "Competitor — event details",
      "Competitor — athlete profile",
      "Competitor — match result",
      "Competitor — tournament information",
    ],
  },
} satisfies Record<Locale, { label: string; alts: string[] }>;

const sources = [
  "/projects/wecompete/ios-1.webp",
  "/projects/wecompete/ios-2.webp",
  "/projects/wecompete/ios-3.webp",
  "/projects/wecompete/ios-4.webp",
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
            width={260}
            height={564}
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
