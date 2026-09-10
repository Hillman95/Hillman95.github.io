import Image from "next/image";

type Locale = "ru" | "en";

const copy = {
  ru: {
    label: "Экраны приложения Govza",
    alts: [
      "Govza — создание заказа",
      "Govza — маршрут и детали доставки",
      "Govza — список заказов курьера",
    ],
  },
  en: {
    label: "Govza app screens",
    alts: [
      "Govza — creating an order",
      "Govza — delivery route and details",
      "Govza — courier order list",
    ],
  },
} satisfies Record<Locale, { label: string; alts: string[] }>;

const sources = [
  "/projects/govza/device0.webp",
  "/projects/govza/device1.webp",
  "/projects/govza/device2.webp",
] as const;

export function GovzaCollage({ locale }: { locale: Locale }) {
  const localized = copy[locale];

  return (
    <div className="govza-collage" role="group" aria-label={localized.label}>
      {sources.map((src, index) => (
        <figure
          key={src}
          className={`govza-phone govza-phone-${index + 1}`}
        >
          <Image
            src={src}
            alt={localized.alts[index]}
            width={320}
            height={640}
            sizes="(max-width: 900px) 130px, 180px"
          />
        </figure>
      ))}
      <Image
        className="govza-icon"
        src="/projects/govza/app-icon.webp"
        alt=""
        width={72}
        height={72}
      />
    </div>
  );
}
