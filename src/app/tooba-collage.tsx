import Image from "next/image";

const shots = [
  { src: "/projects/tooba/ios-1.webp", alt: "Tooba — главная" },
  { src: "/projects/tooba/ios-2.webp", alt: "Tooba — фонды" },
  { src: "/projects/tooba/ios-3.webp", alt: "Tooba — пожертвование" },
  { src: "/projects/tooba/ios-4.webp", alt: "Tooba — профиль" },
  { src: "/projects/tooba/ios-5.webp", alt: "Tooba — история" },
] as const;

export function ToobaCollage() {
  return (
    <div className="tooba-collage" aria-label="Скриншоты Tooba">
      {shots.map((shot, index) => (
        <figure
          key={shot.src}
          className={`tooba-phone tooba-phone-${index + 1}`}
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
