// メインページ: 全セクションを統合
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Activities from "@/app/components/Activities";
import Info from "@/app/components/Info";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      {/* ヘッダー（固定ナビゲーション） */}
      <Header />

      {/* ファーストビュー */}
      <Hero />

      {/* ことのはについて */}
      <About />

      {/* 活動紹介 */}
      <Activities />

      {/* 定例会のお知らせ */}
      <Info />

      {/* フッター */}
      <Footer />
    </main>
  );
}
