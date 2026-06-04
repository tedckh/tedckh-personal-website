import { Metadata } from "next";
import styles from "./games.module.css";

export const metadata: Metadata = {
  title: "執業試溫習遊戲",
  description: "一系列互動溫習工具。",
};

const games: {
  id: string;
  title: string;
  description: string;
  url: string;
}[] = [
  {
    id: "tcm-gynecology",
    title: "婦科證型方藥 · 記憶卡",
    description: "香港中醫執業試溫習 · 第五版教材為準 · 逐層翻牌",
    url: "/games/tcm-gynecology.html",
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
