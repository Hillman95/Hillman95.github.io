"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GovzaCollage } from "./govza-collage";
import { LaribaCollage } from "./lariba-collage";
import { ToobaCollage } from "./tooba-collage";

type Locale = "ru" | "en";
type Theme = "light" | "dark";
type ProjectSection = { title: string; text: string };
type ArchitectureGroup = { title: string; text: string };
type ProjectCopy = {
  subtitle: string;
  sections: ProjectSection[];
  architecture?: { rationale: string; groups: ArchitectureGroup[] };
  link?: string;
};

const ArrowUpRight = ({ small = false }: { small?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={small ? "icon icon-small" : "icon"}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const SunIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="control-icon">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="control-icon">
    <path d="M20.5 15.1A8.5 8.5 0 0 1 8.9 3.5a8.5 8.5 0 1 0 11.6 11.6Z" />
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

const copy = {
  ru: {
    controls: {
      home: "На главную",
      navigation: "Основная навигация",
      language: "Переключить язык на английский",
      themeLight: "Включить светлую тему",
      themeDark: "Включить тёмную тему",
    },
    nav: ["Работы", "Опыт", "Обо мне", "Контакты"],
    contactLink: "Связаться",
    availability: "Открыт к новым проектам",
    hero: {
      first: "Создаю продукты,",
      second: "которыми",
      accent: "приятно",
      third: "пользоваться.",
      summary: <>Привет, я <strong>Аднан</strong> — ведущий инженер, разработчик мобильных приложений. Более 8 лет создаю Flutter, Android и iOS-продукты, а также backend и web-часть сервисов.</>,
      work: "Работы",
      workLabel: "Смотреть работы",
    },
    portfolio: { kicker: "Портфолио", title: "Некоторые из моих", accent: "работ" },
    architecture: "Архитектура и обоснование",
    architectureLabel: "Архитектура и обоснование",
    download: "Скачать",
    cpuVisual: { title: "Управление офисами в одном продукте", analytics: "Аналитика" },
    dirhamVisual: {
      summary: "Сводка",
      turnover: "Общий оборот",
      payments: "Платежи",
      active: "Активные",
      overdue: "Просрочки",
    },
    matchStatus: "МАТЧ ИДЁТ",
    projects: {
      cpu: {
        subtitle: "Платформа управления офисами обслуживания",
        sections: [
          { title: "О продукте", text: "Основной инструмент управления офисами обслуживания билайн. Проект удостоен наград «Бриллиантовая пчела 2023» и «Лучшая команда»." },
          { title: "Моя роль", text: "Проектирование архитектуры, разработка Flutter-приложения (Mobile/Web), адаптивный UI/UX, code review и технические стандарты." },
          { title: "Интеграции и API", text: "Формирование требований к REST API, платформенный код на Kotlin, Swift и JS для нативных и web-возможностей." },
          { title: "CI/CD и оптимизация", text: "Автоматизация сборки, релизы в App Store и Google Play. Оптимизация Flutter Web (assets, JS chunking, shader warm-up)." },
        ],
        link: "О проекте",
      },
      lariba: {
        subtitle: "Мобильное приложение честной рассрочки",
        sections: [
          { title: "Задача", text: "Запустить понятное Flutter-приложение рассрочки: от каталога и калькулятора до заявки и авторизации." },
          { title: "Моя роль", text: "За короткий срок разработано Flutter-приложение, настроена продуктовая аналитика для бизнеса и налажен процесс CI/CD." },
          { title: "Ключевые решения", text: "Анонимный вход в каталог и калькулятор, управляемая авторизация, deep links, push и единый слой аналитики." },
        ],
        architecture: {
          rationale: "Решения выбраны ради точечных обновлений UI, явного жизненного цикла зависимостей и короткого пути пользователя до авторизации.",
          groups: [
            { title: "Состояние и зависимости", text: "ValueNotifier-контроллеры с управляемым lifecycle и scoped DI через GetIt." },
            { title: "Данные и авторизация", text: "Repository/Dio, JWT и single-flight refresh без параллельного обновления токена." },
            { title: "Путь и доставка", text: "Anonymous-first каталог и калькулятор, deep links, push, analytics wrappers, CI и Fastlane." },
          ],
        },
      },
      dirham: {
        subtitle: "Операционная система исламской рассрочки",
        sections: [
          { title: "Задача", text: "Перевести процессы из legacy AppSheet в надёжную систему для заявок, платежей, касс и ролей." },
          { title: "Моя роль", text: "Ведущий full-stack/product-инженер: спроектировал NestJS/PostgreSQL API и React-панель, участвовал в развитии Flutter." },
          { title: "Ключевые решения", text: "Tenant-изоляция, fail-closed доступ, транзакционные платежи, идемпотентность и обратные операции вместо удаления." },
        ],
        architecture: {
          rationale: "Архитектура предотвращает дубли платежей, устаревшие балансы и доступ к данным другой компании.",
          groups: [
            { title: "Контур данных", text: "NestJS/PostgreSQL API и multi-tenant модель с обязательным companyId." },
            { title: "Доступ", text: "Роли и capabilities проверяются fail-closed на каждом защищённом сценарии." },
            { title: "Финансы", text: "Serializable-транзакции, row locks и retries; idempotency для команд, reversals вместо удаления." },
            { title: "Интерфейсы", text: "SQL live views, TanStack Query в React и явные зависимости во Flutter." },
          ],
        },
      },
      tooba: {
        subtitle: "Благотворительная платформа",
        sections: [
          { title: "О продукте", text: "Пожертвования в проверенные фонды в три клика. 126+ фондов, прозрачные отчёты." },
          { title: "Моя роль", text: "Mobile Team Lead: Android, Flutter, портирование и развитие продукта, менторство." },
          { title: "Платежи", text: "Интеграция с различными payment-провайдерами: YooKassa, CloudPayments, Stripe, Google/Apple Pay." },
        ],
        link: "Сайт",
      },
      govza: {
        subtitle: "Сервис городской курьерской доставки",
        sections: [
          { title: "О продукте", text: "Приложение для создания заказов, работы курьеров и отслеживания доставки на карте в реальном времени." },
          { title: "Моя роль", text: "Разрабатывал Flutter-приложение в команде и верстал пользовательские сценарии по макетам Sketch и Figma." },
          { title: "Интерфейс", text: "Реализовывал экраны заказов, статусов и карты, сохраняя точность макетов и единое поведение на iOS и Android." },
        ],
        link: "Сайт",
      },
      wecompete: {
        subtitle: "Полный цикл турниров по единоборствам",
        sections: [
          { title: "Задача", text: "Спроектировать и запустить удобную платформу полного цикла: регистрация, сетки, расписание и live-скоринг." },
          { title: "Моя роль", text: "Продуктовый архитектор и основной инженер mobile, backend и admin-контуров; развитие продукта — вместе с командой." },
          { title: "Ключевые решения", text: "Сервер как источник истины, детерминированные сетки, live-обновления со сверкой состояния и безопасные операционные сценарии." },
        ],
        architecture: {
          rationale: "Прагматичный модульный подход ускоряет развитие продукта, а транзакции, детерминизм и сверка состояния сохраняют корректность турнира в live-режиме.",
          groups: [
            { title: "Mobile", text: "Flutter BLoC и repositories; WebSocket patches плюс REST reconciliation; виджеты, Live Activities и push." },
            { title: "Backend", text: "Модульный монолит Go/Gin, PostgreSQL/pgx, транзакционная генерация сеток и детерминированное продвижение; расписание с timezone и live-сдвигами, server-authoritative clock, FCM/APNs, YooKassa и S3." },
            { title: "Admin", text: "React/TypeScript и TanStack Query; role/hostname route policies, операционные safeguards, экраны судьи и зрителя." },
          ],
        },
        link: "Сайт",
      },
    } satisfies Record<string, ProjectCopy>,
    experience: {
      kicker: "Опыт",
      title: "8+ лет в мобильной",
      rest: "разработке и",
      accent: "не только",
      present: "2023 — сейчас",
      jobs: [
        { company: "билайн", role: "Ведущий инженер · Mobile", text: "Центр мобильных телеком продуктов. Flutter mobile/web «ЦПУ», нативные интеграции, CI/CD. Beeline Awards 2023–2024." },
        { company: "VK", role: "Старший разработчик", text: "R_keeper SmartReserve: KMM + Flutter, SQLDelight, platform channels; Android на Kotlin/Java." },
        { company: "Tooba", role: "Mobile Team Lead", text: "Благотворительная платформа: проверенные фонды, пожертвования в три клика, прозрачные отчёты. Android, Flutter, менторство." },
      ],
    },
    about: {
      kicker: "Обо мне",
      title: "От идеи и архитектуры",
      rest: "до готового",
      accent: "продукта",
      paragraphs: [
        "Специализация — Flutter, Android и iOS. Проектирую приложения целиком: архитектура, бизнес-логика, нативные интеграции и публикация.",
        "Backend и frontend помогают видеть продукт как систему и доводить сервисы до production.",
      ],
      aiTitle: "Ускоряю разработку с ИИ",
      aiText: "Использую LLM, AI-агентов и MCP для проектирования, тестов и автоматизации. Ответственность за архитектуру и качество — за мной.",
      skills: "Технологии",
    },
    contact: { kicker: "Есть идея?", title: "Давайте создадим", rest: "что-то", accent: "классное", email: "Почта" },
    footer: { name: "Аднан", top: "Наверх ↑" },
  },
  en: {
    controls: {
      home: "Go to the homepage",
      navigation: "Main navigation",
      language: "Switch language to Russian",
      themeLight: "Enable light theme",
      themeDark: "Enable dark theme",
    },
    nav: ["Work", "Experience", "About", "Contact"],
    contactLink: "Get in touch",
    availability: "Available for new projects",
    hero: {
      first: "I build products",
      second: "that feel",
      accent: "great",
      third: "to use.",
      summary: <>Hi, I&apos;m <strong>Adnan</strong> — a lead engineer and mobile app developer. For over 8 years, I&apos;ve built Flutter, Android, and iOS products, as well as backend and web services.</>,
      work: "Work",
      workLabel: "View my work",
    },
    portfolio: { kicker: "Portfolio", title: "A selection of my", accent: "work" },
    architecture: "Architecture and rationale",
    architectureLabel: "Architecture and rationale",
    download: "Download",
    cpuVisual: { title: "Office management in one product", analytics: "Analytics" },
    dirhamVisual: {
      summary: "Summary",
      turnover: "Total turnover",
      payments: "Payments",
      active: "Active",
      overdue: "Overdue",
    },
    matchStatus: "MATCH LIVE",
    projects: {
      cpu: {
        subtitle: "Customer service office management platform",
        sections: [
          { title: "Product", text: "The primary management tool for Beeline customer service offices. The project received the Diamond Bee 2023 and Best Team awards." },
          { title: "My role", text: "Architecture design, Flutter application development (Mobile/Web), responsive UI/UX, code review, and technical standards." },
          { title: "Integrations and API", text: "REST API requirements, plus platform code in Kotlin, Swift, and JS for native and web capabilities." },
          { title: "CI/CD and optimization", text: "Automated builds and releases to the App Store and Google Play. Flutter Web optimization (assets, JS chunking, shader warm-up)." },
        ],
        link: "About the project",
      },
      lariba: {
        subtitle: "A fair installment-plan mobile app",
        sections: [
          { title: "Goal", text: "Launch an intuitive Flutter installment app, from catalog and calculator to applications and authentication." },
          { title: "My role", text: "The Flutter app was delivered in a short timeframe, with product analytics set up for the business and a reliable CI/CD process established." },
          { title: "Key decisions", text: "Anonymous access to the catalog and calculator, managed authentication, deep links, push notifications, and a unified analytics layer." },
        ],
        architecture: {
          rationale: "The choices prioritize targeted UI updates, explicit dependency lifecycles, and a short user path to authentication.",
          groups: [
            { title: "State and dependencies", text: "ValueNotifier controllers with managed lifecycle and scoped DI through GetIt." },
            { title: "Data and authentication", text: "Repository/Dio, JWT, and single-flight refresh without parallel token updates." },
            { title: "Journey and delivery", text: "Anonymous-first catalog and calculator, deep links, push, analytics wrappers, CI, and Fastlane." },
          ],
        },
      },
      dirham: {
        subtitle: "An operating system for Islamic installments",
        sections: [
          { title: "Goal", text: "Move legacy AppSheet processes into a reliable system for applications, payments, cash desks, and roles." },
          { title: "My role", text: "Lead full-stack/product engineer: designed the NestJS/PostgreSQL API and React dashboard, and contributed to Flutter development." },
          { title: "Key decisions", text: "Tenant isolation, fail-closed access, transactional payments, idempotency, and reversals instead of deletion." },
        ],
        architecture: {
          rationale: "The architecture prevents duplicate payments, stale balances, and access to another company’s data.",
          groups: [
            { title: "Data layer", text: "NestJS/PostgreSQL API and a multi-tenant model with mandatory companyId." },
            { title: "Access", text: "Roles and capabilities are checked fail-closed in every protected flow." },
            { title: "Finance", text: "Serializable transactions, row locks, and retries; command idempotency and reversals instead of deletion." },
            { title: "Interfaces", text: "SQL live views, TanStack Query in React, and explicit dependencies in Flutter." },
          ],
        },
      },
      tooba: {
        subtitle: "Charitable giving platform",
        sections: [
          { title: "Product", text: "Donations to verified charities in three taps. 126+ charities and transparent reporting." },
          { title: "My role", text: "Mobile Team Lead: Android, Flutter, product migration and development, and mentoring." },
          { title: "Payments", text: "Integration with multiple payment providers: YooKassa, CloudPayments, Stripe, and Google/Apple Pay." },
        ],
        link: "Website",
      },
      govza: {
        subtitle: "Urban courier delivery service",
        sections: [
          { title: "Product", text: "An app for creating orders, managing courier workflows, and tracking deliveries on a live map." },
          { title: "My role", text: "Developed the Flutter app as part of a team and implemented user flows from Sketch and Figma designs." },
          { title: "Interface", text: "Built order, status, and map screens with close design fidelity and consistent behavior across iOS and Android." },
        ],
        link: "Website",
      },
      wecompete: {
        subtitle: "End-to-end combat sports tournaments",
        sections: [
          { title: "Goal", text: "Design and launch an intuitive end-to-end platform for registration, brackets, scheduling, and live scoring." },
          { title: "My role", text: "Product architect and primary engineer across mobile, backend, and admin systems; product development is a team effort." },
          { title: "Key decisions", text: "Server as the source of truth, deterministic brackets, live updates with state reconciliation, and safe operational flows." },
        ],
        architecture: {
          rationale: "A pragmatic modular approach accelerates product development, while transactions, determinism, and reconciliation keep tournaments correct in real time.",
          groups: [
            { title: "Mobile", text: "Flutter BLoC and repositories; WebSocket patches plus REST reconciliation; widgets, Live Activities, and push." },
            { title: "Backend", text: "Modular Go/Gin monolith, PostgreSQL/pgx, transactional bracket generation and deterministic advancement; timezone-aware scheduling with live shifts, server-authoritative clock, FCM/APNs, YooKassa, and S3." },
            { title: "Admin", text: "React/TypeScript and TanStack Query; role/hostname route policies, operational safeguards, and referee and spectator screens." },
          ],
        },
        link: "Website",
      },
    } satisfies Record<string, ProjectCopy>,
    experience: {
      kicker: "Experience",
      title: "8+ years in mobile",
      rest: "development and",
      accent: "beyond",
      present: "2023 — present",
      jobs: [
        { company: "Beeline", role: "Lead Engineer · Mobile", text: "Mobile telecom product center. Flutter mobile/web CPU, native integrations, and CI/CD. Beeline Awards 2023–2024." },
        { company: "VK", role: "Senior Developer", text: "R_keeper SmartReserve: KMM + Flutter, SQLDelight, platform channels; Android in Kotlin/Java." },
        { company: "Tooba", role: "Mobile Team Lead", text: "Charitable platform: verified charities, donations in three taps, and transparent reporting. Android, Flutter, and mentoring." },
      ],
    },
    about: {
      kicker: "About",
      title: "From idea and architecture",
      rest: "to a finished",
      accent: "product",
      paragraphs: [
        "I specialize in Flutter, Android, and iOS, designing complete applications: architecture, business logic, native integrations, and publishing.",
        "Backend and frontend expertise helps me see the product as a system and take services all the way to production.",
      ],
      aiTitle: "Accelerating development with AI",
      aiText: "I use LLMs, AI agents, and MCP for design, testing, and automation. I remain accountable for architecture and quality.",
      skills: "Technologies",
    },
    contact: { kicker: "Have an idea?", title: "Let’s build", rest: "something", accent: "great", email: "Email" },
    footer: { name: "Adnan", top: "Back to top ↑" },
  },
} as const;

const projectVisuals = {
  cpu: ["Flutter", "Dart", "Kotlin", "Swift", "JavaScript", "REST", "CI/CD"],
  lariba: ["Flutter", "ValueNotifier", "GetIt", "go_router", "Dio"],
  dirham: ["NestJS", "Prisma", "PostgreSQL", "React", "Flutter", "Docker"],
  tooba: ["Flutter", "Android", "Kotlin"],
  govza: ["Flutter", "Dart", "REST", "Maps", "Geolocation"],
  wecompete: ["Flutter", "Go", "React", "WebSocket", "Firebase"],
} as const;

const projectMeta = {
  cpu: { title: { ru: "ЦПУ · билайн", en: "CPU · Beeline" }, className: "project-cpu", href: "https://cpu.beeline.ru/app" },
  lariba: { title: { ru: "ЛяРиба", en: "Lariba" }, className: "project-lariba" },
  dirham: { title: { ru: "Dirham", en: "Dirham" }, className: "project-dirham" },
  tooba: { title: { ru: "Tooba", en: "Tooba" }, className: "project-tooba", href: "https://tooba.com/" },
  govza: { title: { ru: "Govza", en: "Govza" }, className: "project-govza", href: "https://govza.app/" },
  wecompete: { title: { ru: "WeCompete", en: "WeCompete" }, className: "project-wecompete", href: "https://wecompete.ru/" },
} as const;

const stores = {
  lariba: {
    appStore: "https://apps.apple.com/kz/app/%D0%BB%D1%8F%D1%80%D0%B8%D0%B1%D0%B0/id6670492469",
    googlePlay: "https://play.google.com/store/apps/details?id=com.lyariba.noriba",
  },
  tooba: {
    appStore: "https://apps.apple.com/us/app/tooba-help-easy/id1247468713",
    googlePlay: "https://play.google.com/store/apps/details?id=site.tooba.android",
  },
} as const;

function ProjectVisual({ id, locale }: { id: keyof typeof projectMeta; locale: Locale }) {
  const t = copy[locale];
  if (id === "cpu") {
    return (
      <div className="cpu-showcase" aria-hidden="true">
        <div className="cpu-art"><Image src="/projects/cpu/hero.webp" alt="" fill sizes="(max-width: 900px) 100vw, 340px" priority /></div>
        <div className="cpu-showcase-copy">
          <span>{projectMeta.cpu.title[locale]}</span>
          <strong>{t.cpuVisual.title}</strong>
          <div><small>Mobile + Web</small><small>{t.cpuVisual.analytics}</small><small>CI/CD</small></div>
        </div>
      </div>
    );
  }
  if (id === "lariba") return <LaribaCollage locale={locale} />;
  if (id === "tooba") return <ToobaCollage locale={locale} />;
  if (id === "govza") return <GovzaCollage locale={locale} />;
  if (id === "dirham") {
    return (
      <div className="dirham-card" aria-hidden="true">
        <div className="dirham-head"><span>Д</span><small>{t.dirhamVisual.summary}</small></div>
        <strong>2 480 000 ₽</strong>
        <small>{t.dirhamVisual.turnover}</small>
        <div className="dirham-stats">
          <div><small>{t.dirhamVisual.payments}</small><b>184</b></div>
          <div><small>{t.dirhamVisual.active}</small><b>62</b></div>
          <div><small>{t.dirhamVisual.overdue}</small><b>3</b></div>
        </div>
      </div>
    );
  }
  return (
    <div className="activity-card" aria-hidden="true">
      <div className="activity-top"><span className="pulse" /><small>{t.matchStatus}</small><b>02:14</b></div>
      <div className="activity-score">
        <div><i>AD</i><span>Adnan</span></div>
        <strong>4 <small>:</small> 2</strong>
        <div><i>MK</i><span>Marco</span></div>
      </div>
      <div className="activity-progress"><span /></div>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru");
  const [theme, setTheme] = useState<Theme>("light");
  const t = copy[locale];

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const savedLocale = localStorage.getItem("portfolio-locale");
      if (savedLocale === "ru" || savedLocale === "en") setLocale(savedLocale);
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    const next = locale === "ru" ? "en" : "ru";
    setLocale(next);
    localStorage.setItem("portfolio-locale", next);
    document.documentElement.lang = next;
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="logo" href="#top" aria-label={t.controls.home}>A<span>.</span></a>
          <nav aria-label={t.controls.navigation}>
            <a href="#work">{t.nav[0]}</a><a href="#experience">{t.nav[1]}</a>
            <a href="#about">{t.nav[2]}</a><a href="#contact">{t.nav[3]}</a>
          </nav>
          <div className="header-actions">
            <button
              className="header-control language-control"
              type="button"
              onClick={toggleLocale}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleLocale();
                }
              }}
              aria-label={t.controls.language}
              aria-pressed={locale === "en"}
            >
              {locale === "ru" ? "EN" : "RU"}
            </button>
            <button
              className="header-control"
              type="button"
              onClick={toggleTheme}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleTheme();
                }
              }}
              aria-label={theme === "dark" ? t.controls.themeLight : t.controls.themeDark}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a className="header-link" href="#contact">{t.contactLink} <ArrowUpRight small /></a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="availability reveal"><span />{t.availability}</div>
          <h1 className="reveal reveal-delay-1">
            {t.hero.first}<br />{t.hero.second} <em>{t.hero.accent}</em><br />{t.hero.third}
          </h1>
          <div className="hero-bottom reveal reveal-delay-2">
            <p>{t.hero.summary}</p>
            <a className="circle-link" href="#work" aria-label={t.hero.workLabel}><span>{t.hero.work}</span><ArrowUpRight /></a>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading"><p>{t.portfolio.kicker}</p><h2>{t.portfolio.title} <em>{t.portfolio.accent}</em>.</h2></div>
          <div className="projects">
            {(Object.keys(projectMeta) as Array<keyof typeof projectMeta>).map((id) => {
              const meta = projectMeta[id];
              const project = t.projects[id];
              const projectTitle = meta.title[locale];
              const storeLinks = id === "lariba" || id === "tooba" ? stores[id] : undefined;
              return (
                <article className={`project ${meta.className}`} key={id}>
                  <div className="project-info">
                    <div className="project-copy"><p className="project-subtitle">{project.subtitle}</p><h3>{projectTitle}</h3></div>
                    <div className="project-sections">
                      {project.sections.map((section) => <div key={section.title}><h4>{section.title}</h4><p>{section.text}</p></div>)}
                    </div>
                    {"architecture" in project && project.architecture ? (
                      <details className="project-architecture">
                        <summary aria-label={`${t.architectureLabel} — ${projectTitle}`}>{t.architecture}</summary>
                        <div className="architecture-content">
                          <p className="architecture-rationale">{project.architecture.rationale}</p>
                          <div className="architecture-grid">
                            {project.architecture.groups.map((group) => <div key={group.title}><h4>{group.title}</h4><p>{group.text}</p></div>)}
                          </div>
                        </div>
                      </details>
                    ) : null}
                    <div className="project-footer">
                      <div className="tags">{projectVisuals[id].map((item) => <span key={item}>{item}</span>)}</div>
                      {"href" in meta && "link" in project && project.link ? (
                        <div className="project-links"><a href={meta.href} target="_blank" rel="noreferrer">{project.link} <ArrowUpRight small /></a></div>
                      ) : null}
                    </div>
                  </div>
                  <div className="project-visual">
                    {storeLinks ? (
                      <div className="visual-store-ctas">
                        <a className="store-cta" href={storeLinks.appStore} target="_blank" rel="noreferrer" aria-label={`${t.download} — App Store`}>
                          <AppleIcon /><span><small>App Store</small><strong>{t.download}</strong></span>
                        </a>
                        <a className="store-cta" href={storeLinks.googlePlay} target="_blank" rel="noreferrer" aria-label={`${t.download} — Google Play`}>
                          <PlayIcon /><span><small>Google Play</small><strong>{t.download}</strong></span>
                        </a>
                      </div>
                    ) : null}
                    <ProjectVisual id={id} locale={locale} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-heading"><p>{t.experience.kicker}</p><h2>{t.experience.title}<br />{t.experience.rest} <em>{t.experience.accent}</em>.</h2></div>
          <div className="timeline">
            {t.experience.jobs.map((job, index) => (
              <article key={job.company}>
                <time>{index === 0 ? t.experience.present : index === 1 ? "2022" : "2020 — 2022"}</time>
                <div><h3>{index === 2 ? <a href="https://tooba.com/" target="_blank" rel="noreferrer">{job.company}</a> : job.company}</h3><p>{job.role}</p></div>
                <p>{job.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-heading"><p>{t.about.kicker}</p></div>
          <div className="about-grid">
            <h2>{t.about.title}<br />{t.about.rest} <em>{t.about.accent}</em>.</h2>
            <div className="about-copy">{t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <div className="ai-callout"><div className="ai-mark">AI</div><div><h3>{t.about.aiTitle}</h3><p>{t.about.aiText}</p></div></div>
          <div className="skills" aria-label={t.about.skills}>
            {["Flutter", "Dart", "Kotlin", "Swift", "React", "TypeScript", "NestJS", "Go", "PostgreSQL", "Docker", "CI/CD", "LLM", "MCP"].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <p className="contact-kicker"><span />{t.contact.kicker}</p>
          <h2>{t.contact.title}<br />{t.contact.rest} <em>{t.contact.accent}</em>.</h2>
          <div className="contact-channels">
            <a href="mailto:prisilayna@gmail.com">{t.contact.email}</a>
            <a href="https://t.me/hillman999" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://wa.me/79639199191" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell"><p>© {new Date().getFullYear()} {t.footer.name}</p><a href="#top">{t.footer.top}</a></footer>
    </>
  );
}
