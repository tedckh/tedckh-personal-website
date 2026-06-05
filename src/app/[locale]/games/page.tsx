import type { Metadata } from "next";
import styles from "./games.module.css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const gamesPageTitle = "小遊戲合集";
  const gamesPageDescription = "一系列互動溫習工具。";

  const path = "/games";
  const url =
    locale === "en"
      ? `https://www.tedckh.com${path}`
      : `https://www.tedckh.com/${locale}${path}`;

  return {
    title: gamesPageTitle,
    description: gamesPageDescription,
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.tedckh.com/games",
        "zh-HK": "https://www.tedckh.com/zh-HK/games",
      },
    },
    openGraph: {
      title: gamesPageTitle,
      description: gamesPageDescription,
      url: url,
    },
    twitter: {
      card: "summary_large_image",
      title: gamesPageTitle,
      description: gamesPageDescription,
    },
  };
}

const games: {
  id: string;
  title: string;
  description: string;
  url: string;
}[] = [
  {
    id: "tcm-gynecology",
    title: "婦科證型方藥 · 記憶卡 1",
    description: "香港中醫執業試溫習 · 第五版教材為準 · 逐層翻牌",
    url: "/games/tcm-gynecology.html",
  },
  {
    id: "game2",
    title: "內科證型方藥 · 記憶卡 1",
    description: "香港中醫執業試溫習 · 第五版教材為準 · 逐層翻牌",
    url: "/games/game2.html",
  },
];

export default function GamesIndexPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>執業試溫習遊戲</h1>
      <p className={styles.subtitle}>一系列互動溫習工具。</p>

      <div className={styles.gamesList}>
        {games.map((game) => (
          <div key={game.id} className={styles.gameCard}>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <a href={game.url} target="_blank" rel="noopener noreferrer">
              開始遊戲
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
