import Image from "next/image";

const shots = [
  { src: "/projects/lariba/ios-1.webp", alt: "ЛяРиба — документы" },
  { src: "/projects/lariba/ios-2.webp", alt: "ЛяРиба — каталог" },
  { src: "/projects/lariba/ios-3.webp", alt: "ЛяРиба — калькулятор" },
  { src: "/projects/lariba/ios-4.webp", alt: "ЛяРиба — заявки" },
  { src: "/projects/lariba/android-1.webp", alt: "ЛяРиба — оформление" },
] as const;

export function LaribaCollage() {
  return (
    <div className="lariba-collage" aria-label="Скриншоты ЛяРиба">
      {shots.map((shot, index) => (
        <figure
          key={shot.src}
          className={`lariba-phone lariba-phone-${index + 1}`}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={260}
            height={564}
            sizes="(max-width: 900px) 120px, 160px"
          />
        </figure>
      ))}
    </div>
  );
}
