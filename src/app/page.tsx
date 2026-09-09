import Image from "next/image";
import { LaribaCollage } from "./lariba-collage";
import { ToobaCollage } from "./tooba-collage";

const ArrowUpRight = ({ small = false }: { small?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={small ? "icon icon-small" : "icon"}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const AppleIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="store-icon">
    <path d="M16.7 12.8c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.7-1.8-3.3-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.1 3-2.2.4-.9.6-1.4.9-2.3-2.2-.8-2.5-3-2.5-3.9ZM14.4 6.3c.6-.8 1.1-1.8 1-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.7-1.3Z" />
  </svg>
);

const PlayIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="store-icon">
    <path d="m4 3 10.7 9L4 21l-.1-.1c-.6-.3-.9-.9-.9-1.6V4.7c0-.7.3-1.3.9-1.6L4 3Z" />
    <path d="M17.9 15.2 6.4 22l7.8-7.8 3.7 1Z" />
    <path d="M17.9 8.8 14.2 10 6.4 2l11.5 6.8Z" />
    <path d="M21 11.1c.7.4.7 1.4 0 1.8l-3.1 1.8-4.3-2.7 4.3-2.7L21 11.1Z" />
  </svg>
);

type ProjectLink = { label: string; href: string };
type StoreLinks = { appStore: string; googlePlay: string };
type ProjectSection = { title: string; text: string };
type ArchitectureGroup = { title: string; text: string };
type ProjectArchitecture = {
  rationale: string;
  groups: ArchitectureGroup[];
};

type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  className: string;
  sections?: ProjectSection[];
  architecture?: ProjectArchitecture;
  links: ProjectLink[];
  storeLinks?: StoreLinks;
  visual: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "ЦПУ · билайн",
    subtitle: "Платформа управления офисами обслуживания",
    stack: ["Flutter", "Dart", "Kotlin", "Swift", "JavaScript", "REST", "CI/CD"],
    className: "project-cpu",
    sections: [
      {
        title: "О продукте",
        text: "Основной инструмент управления офисами обслуживания билайн. Проект удостоен наград «Бриллиантовая пчела 2023» и «Лучшая команда».",
      },
      {
        title: "Моя роль",
        text: "Проектирование архитектуры, разработка Flutter-приложения (Mobile/Web), адаптивный UI/UX, code review и технические стандарты.",
      },
      {
        title: "Интеграции и API",
        text: "Формирование требований к REST API, платформенный код на Kotlin, Swift и JS для нативных и web-возможностей.",
      },
      {
        title: "CI/CD и оптимизация",
        text: "Автоматизация сборки, релизы в App Store и Google Play. Оптимизация Flutter Web (assets, JS chunking, shader warm-up).",
      },
    ],
    links: [
      { label: "О проекте", href: "https://cpu.beeline.ru/app" },
    ],
    visual: (
      <div className="cpu-showcase" aria-hidden="true">
        <div className="cpu-art">
          <Image
            src="/projects/cpu/hero.webp"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 340px"
            priority
          />
        </div>
        <div className="cpu-showcase-copy">
          <span>ЦПУ · билайн</span>
          <strong>Управление офисами в одном продукте</strong>
          <div>
            <small>Mobile + Web</small>
            <small>Analytics</small>
            <small>CI/CD</small>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "ЛяРиба",
    subtitle: "Мобильное приложение честной рассрочки",
    stack: ["Flutter", "ValueNotifier", "GetIt", "go_router", "Dio"],
    className: "project-lariba",
    sections: [
      {
        title: "Задача",
        text: "Запустить понятное Flutter-приложение рассрочки: от каталога и калькулятора до заявки и авторизации.",
      },
      {
        title: "Моя роль",
        text: "В одиночку за 3 месяца разработал Flutter-клиент: заложил архитектуру приложения и настроил процесс доставки релизов.",
      },
      {
        title: "Ключевые решения",
        text: "Анонимный вход в каталог и калькулятор, управляемая авторизация, deep links, push и единый слой аналитики.",
      },
    ],
    architecture: {
      rationale:
        "Решения выбраны ради точечных обновлений UI, явного жизненного цикла зависимостей и короткого пути пользователя до авторизации.",
      groups: [
        {
          title: "Состояние и зависимости",
          text: "ValueNotifier-контроллеры с управляемым lifecycle и scoped DI через GetIt.",
        },
        {
          title: "Данные и авторизация",
          text: "Repository/Dio, JWT и single-flight refresh без параллельного обновления токена.",
        },
        {
          title: "Путь и доставка",
          text: "Anonymous-first каталог и калькулятор, deep links, push, analytics wrappers, CI и Fastlane.",
        },
      ],
    },
    links: [],
    storeLinks: {
      appStore:
        "https://apps.apple.com/kz/app/%D0%BB%D1%8F%D1%80%D0%B8%D0%B1%D0%B0/id6670492469",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.lyariba.noriba",
    },
    visual: <LaribaCollage />,
  },
  {
    title: "Dirham",
    subtitle: "Операционная система исламской рассрочки",
    stack: ["NestJS", "Prisma", "PostgreSQL", "React", "Flutter", "Docker"],
    className: "project-dirham",
    sections: [
      {
        title: "Задача",
        text: "Перевести процессы из legacy AppSheet в надёжную систему для заявок, платежей, касс и ролей.",
      },
      {
        title: "Моя роль",
        text: "Ведущий full-stack/product-инженер: спроектировал NestJS/PostgreSQL API и React-панель, участвовал в развитии Flutter.",
      },
      {
        title: "Ключевые решения",
        text: "Tenant-изоляция, fail-closed доступ, транзакционные платежи, идемпотентность и обратные операции вместо удаления.",
      },
    ],
    architecture: {
      rationale:
        "Архитектура предотвращает дубли платежей, устаревшие балансы и доступ к данным другой компании.",
      groups: [
        {
          title: "Контур данных",
          text: "NestJS/PostgreSQL API и multi-tenant модель с обязательным companyId.",
        },
        {
          title: "Доступ",
          text: "Роли и capabilities проверяются fail-closed на каждом защищённом сценарии.",
        },
        {
          title: "Финансы",
          text: "Serializable-транзакции, row locks и retries; idempotency для команд, reversals вместо удаления.",
        },
        {
          title: "Интерфейсы",
          text: "SQL live views, TanStack Query в React и явные зависимости во Flutter.",
        },
      ],
    },
    links: [],
    visual: (
      <div className="dirham-card" aria-hidden="true">
        <div className="dirham-head">
          <span>Д</span>
          <small>Сводка</small>
        </div>
        <strong>2 480 000 ₽</strong>
        <small>Общий оборот</small>
        <div className="dirham-stats">
          <div>
            <small>Платежи</small>
            <b>184</b>
          </div>
          <div>
            <small>Активные</small>
            <b>62</b>
          </div>
          <div>
            <small>Просрочки</small>
            <b>3</b>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Tooba",
    subtitle: "Благотворительная платформа",
    stack: ["Flutter", "Android", "Kotlin"],
    className: "project-tooba",
    sections: [
      {
        title: "О продукте",
        text: "Пожертвования в проверенные фонды в три клика. 126+ фондов, прозрачные отчёты.",
      },
      {
        title: "Моя роль",
        text: "Mobile Team Lead: Android, Flutter, портирование и развитие продукта, менторство.",
      },
      {
        title: "Платежи",
        text: "Интеграция с различными payment-провайдерами: YooKassa, CloudPayments, Stripe, Google/Apple Pay.",
      },
    ],
    links: [{ label: "Сайт", href: "https://tooba.com/" }],
    storeLinks: {
      appStore: "https://apps.apple.com/us/app/tooba-help-easy/id1247468713",
      googlePlay:
        "https://play.google.com/store/apps/details?id=site.tooba.android",
    },
    visual: <ToobaCollage />,
  },
  {
    title: "WeCompete",
    subtitle: "Полный цикл турниров по единоборствам",
    stack: ["Flutter", "Go", "React", "WebSocket", "Firebase"],
    className: "project-wecompete",
    sections: [
      {
        title: "Задача",
        text: "Спроектировать и запустить удобную платформу полного цикла: регистрация, сетки, расписание и live-скоринг.",
      },
      {
        title: "Моя роль",
        text: "Продуктовый архитектор и основной инженер mobile, backend и admin-контуров; развитие продукта — вместе с командой.",
      },
      {
        title: "Ключевые решения",
        text: "Сервер как источник истины, детерминированные сетки, live-обновления со сверкой состояния и безопасные операционные сценарии.",
      },
    ],
    architecture: {
      rationale:
        "Прагматичный модульный подход ускоряет развитие продукта, а транзакции, детерминизм и сверка состояния сохраняют корректность турнира в live-режиме.",
      groups: [
        {
          title: "Mobile",
          text: "Flutter BLoC и repositories; WebSocket patches плюс REST reconciliation; виджеты, Live Activities и push.",
        },
        {
          title: "Backend",
          text: "Модульный монолит Go/Gin, PostgreSQL/pgx, транзакционная генерация сеток и детерминированное продвижение; расписание с timezone и live-сдвигами, server-authoritative clock, FCM/APNs, YooKassa и S3.",
        },
        {
          title: "Admin",
          text: "React/TypeScript и TanStack Query; role/hostname route policies, операционные safeguards, экраны судьи и зрителя.",
        },
      ],
    },
    links: [{ label: "Сайт", href: "https://wecompete.ru/" }],
    visual: (
      <div className="activity-card" aria-hidden="true">
        <div className="activity-top">
          <span className="pulse" />
          <small>МАТЧ ИДЁТ</small>
          <b>02:14</b>
        </div>
        <div className="activity-score">
          <div>
            <i>AD</i>
            <span>Adnan</span>
          </div>
          <strong>
            4 <small>:</small> 2
          </strong>
          <div>
            <i>MK</i>
            <span>Marco</span>
          </div>
        </div>
        <div className="activity-progress">
          <span />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="logo" href="#top" aria-label="На главную">
            A<span>.</span>
          </a>
          <nav aria-label="Основная навигация">
            <a href="#work">Работы</a>
            <a href="#experience">Опыт</a>
            <a href="#about">Обо мне</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a className="header-link" href="#contact">
            Связаться <ArrowUpRight small />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="availability reveal">
            <span />
            Открыт к новым проектам
          </div>
          <h1 className="reveal reveal-delay-1">
            Создаю продукты,
            <br />
            которыми <em>приятно</em>
            <br />
            пользоваться.
          </h1>
          <div className="hero-bottom reveal reveal-delay-2">
            <p>
              Привет, я <strong>Аднан</strong> — ведущий инженер, разработчик
              мобильных приложений. Более 8 лет создаю Flutter,
              Android и iOS-продукты, а также backend и web-часть сервисов.
            </p>
            <a className="circle-link" href="#work" aria-label="Смотреть работы">
              <span>Работы</span>
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading">
            <p>Портфолио</p>
            <h2>Некоторые из моих <em>работ</em>.</h2>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article
                className={`project ${project.className}`}
                key={project.title}
              >
                <div className="project-info">
                  <div className="project-copy">
                    <p className="project-subtitle">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                  </div>
                  {project.sections ? (
                    <div className="project-sections">
                      {project.sections.map((section) => (
                        <div key={section.title}>
                          <h4>{section.title}</h4>
                          <p>{section.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {project.architecture ? (
                    <details className="project-architecture">
                      <summary
                        aria-label={`Архитектура и обоснование — ${project.title}`}
                      >
                        Архитектура и обоснование
                      </summary>
                      <div className="architecture-content">
                        <p className="architecture-rationale">
                          {project.architecture.rationale}
                        </p>
                        <div className="architecture-grid">
                          {project.architecture.groups.map((group) => (
                            <div key={group.title}>
                              <h4>{group.title}</h4>
                              <p>{group.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  ) : null}
                  <div className="project-footer">
                    <div className="tags">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    {project.links.length > 0 ? (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            key={link.label}
                          >
                            {link.label} <ArrowUpRight small />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="project-visual">
                  {project.storeLinks ? (
                    <div className="visual-store-ctas">
                      <a
                        className="store-cta"
                        href={project.storeLinks.appStore}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AppleIcon />
                        <span>
                          <small>App Store</small>
                          <strong>Скачать</strong>
                        </span>
                      </a>
                      <a
                        className="store-cta"
                        href={project.storeLinks.googlePlay}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <PlayIcon />
                        <span>
                          <small>Google Play</small>
                          <strong>Скачать</strong>
                        </span>
                      </a>
                    </div>
                  ) : null}
                  {project.visual}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-heading">
            <p>Опыт</p>
            <h2>
              8+ лет в мобильной
              <br />
              разработке и <em>не только</em>.
            </h2>
          </div>
          <div className="timeline">
            <article>
              <time>2023 — сейчас</time>
              <div>
                <h3>билайн</h3>
                <p>Ведущий инженер · Mobile</p>
              </div>
              <p>
                Центр мобильных телеком продуктов. Flutter mobile/web «ЦПУ»,
                нативные интеграции, CI/CD. Beeline Awards 2023–2024.
              </p>
            </article>
            <article>
              <time>2022</time>
              <div>
                <h3>VK</h3>
                <p>Старший разработчик</p>
              </div>
              <p>
                R_keeper SmartReserve: KMM + Flutter, SQLDelight, platform
                channels; Android на Kotlin/Java.
              </p>
            </article>
            <article>
              <time>2020 — 2022</time>
              <div>
                <h3>
                  <a href="https://tooba.com/" target="_blank" rel="noreferrer">
                    Tooba
                  </a>
                </h3>
                <p>Mobile Team Lead</p>
              </div>
              <p>
                Благотворительная платформа: проверенные фонды, пожертвования в
                три клика, прозрачные отчёты. Android, Flutter, менторство.
              </p>
            </article>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-heading">
            <p>Обо мне</p>
          </div>
          <div className="about-grid">
            <h2>
              От идеи и архитектуры
              <br />
              до готового <em>продукта</em>.
            </h2>
            <div className="about-copy">
              <p>
                Специализация — Flutter, Android и iOS. Проектирую приложения
                целиком: архитектура, бизнес-логика, нативные интеграции и
                публикация.
              </p>
              <p>
                Backend и frontend помогают видеть продукт как систему и
                доводить сервисы до production.
              </p>
            </div>
          </div>
          <div className="ai-callout">
            <div className="ai-mark">AI</div>
            <div>
              <h3>Ускоряю разработку с ИИ</h3>
              <p>
                Использую LLM, AI-агентов и MCP для проектирования, тестов и
                автоматизации. Ответственность за архитектуру и качество — за
                мной.
              </p>
            </div>
          </div>
          <div className="skills" aria-label="Технологии">
            {[
              "Flutter",
              "Dart",
              "Kotlin",
              "Swift",
              "React",
              "TypeScript",
              "NestJS",
              "Go",
              "PostgreSQL",
              "Docker",
              "CI/CD",
              "LLM",
              "MCP",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <p className="contact-kicker">
            <span /> Есть идея?
          </p>
          <h2>
            Давайте создадим
            <br />
            что-то <em>классное</em>.
          </h2>
          <div className="contact-channels">
            <a href="mailto:prisilayna@gmail.com">Почта</a>
            <a href="https://t.me/hillman999" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://wa.me/79639199191" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Аднан</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </>
  );
}
