"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero セクションの入場アニメーション（スクロールトリガーなし、ページロード時）
    const ctx = gsap.context(() => {
      // 背景の水彩装飾
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // テキストエリアのフェードイン
      if (textRef.current) {
        const children = textRef.current.querySelectorAll(".hero-item");
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power2.out",
            stagger: 0.2,
            delay: 0.3,
          }
        );
      }

      // 画像エリアのフェードイン（SSR対応）
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power2.out", delay: 0.5 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="watercolor-bg relative overflow-hidden"
      style={{
        minHeight: "100svh",
        paddingTop: "clamp(100px, 14vh, 130px)",
        paddingBottom: "clamp(60px, 8vh, 100px)",
      }}
    >
      {/* 背景装飾: 水彩の滲み */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* 左上の水彩テクスチャ */}
        <img
          src="/sozai/cell_03_r1c3.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            top: "5%",
            left: "-8%",
            width: "clamp(280px, 35vw, 480px)",
            opacity: 0.18,
            transform: "rotate(-15deg)",
          }}
        />
        {/* 右下の水彩テクスチャ */}
        <img
          src="/sozai/cell_03_r1c3.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "5%",
            right: "-5%",
            width: "clamp(200px, 25vw, 350px)",
            opacity: 0.10,
            transform: "rotate(160deg) scaleX(-1)",
          }}
        />
        {/* 波線装飾 */}
        <img
          src="/sozai/cell_01_r1c1.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "15%",
            left: "5%",
            width: "clamp(150px, 20vw, 260px)",
            opacity: 0.35,
          }}
        />
        {/* 右側の淡い丸い滲み */}
        <img
          src="/sozai/cell_08_r2c2.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            top: "20%",
            right: "8%",
            width: "clamp(120px, 15vw, 200px)",
            opacity: 0.15,
          }}
        />
      </div>

      {/* メインコンテンツ */}
      <div
        className="section-wrapper relative"
        style={{
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "center",
          minHeight: "calc(100svh - 180px)",
        }}
      >
        {/* 左側: テキスト */}
        <div ref={textRef} style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
          {/* メインコピー h1 */}
          <h1 className="hero-item" style={{ margin: 0 }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "0.08em",
                lineHeight: 1.5,
                color: "var(--color-text)",
              }}
            >
              他人の言葉じゃない、
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                lineHeight: 1.5,
                color: "var(--color-text)",
              }}
            >
              自分の言葉を見つけるために。
            </span>
          </h1>

          {/* リード文 */}
          <p
            className="hero-item"
            style={{
              margin: 0,
              fontSize: "clamp(0.85rem, 1.2vw, 0.97rem)",
              color: "var(--color-text-light)",
              lineHeight: 2.3,
              letterSpacing: "0.1em",
            }}
          >
            ことのはは、言葉を通して、<br />
            自分、そして他者と向き合うきっかけをつくる団体です。<br />
            誰かの言葉ではなく、<br />
            あなたの「自分の言葉」と出会えることを願っています。
          </p>

          {/* CTAボタン群 */}
          <div className="hero-item flex items-center gap-4 flex-wrap">
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.8rem",
                borderRadius: "50px",
                backgroundColor: "var(--color-accent-navy)",
                color: "white",
                fontFamily: "var(--font-serif)",
                fontSize: "0.88rem",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#3d5370";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(44,62,80,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-accent-navy)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              ことのはについて
            </a>
            <a href="#activities" className="text-link-arrow">
              活動を見る <span>→</span>
            </a>
          </div>
        </div>

        {/* 右側: ノート・万年筆・ドライフラワーの画像 */}
        <div
          ref={imageRef}
          className="relative hidden md:block"
          style={{
            aspectRatio: "1 / 1",
            maxWidth: "520px",
            minHeight: "380px",
            margin: "0 auto",
          }}
        >
          {/* 背景の水彩滲み */}
          <img
            src="/sozai/cell_03_r1c3.png"
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{
              bottom: "5%",
              left: "5%",
              width: "80%",
              opacity: 0.25,
              zIndex: 0,
            }}
          />

          {/* 開いたノート */}
          <img
            src="/sozai/cell_15_r3c3.png"
            alt="開いたノート"
            className="absolute"
            style={{
              bottom: "12%",
              left: "8%",
              width: "68%",
              zIndex: 1,
              filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.08))",
            }}
          />

          {/* 万年筆 */}
          <img
            src="/sozai/cell_16_r3c4.png"
            alt="万年筆"
            className="absolute"
            style={{
              bottom: "8%",
              right: "8%",
              width: "30%",
              zIndex: 2,
              transform: "rotate(-20deg)",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))",
            }}
          />

          {/* ドライフラワー（カスミソウ） */}
          <img
            src="/sozai/cell_09_r2c3.png"
            alt="ドライフラワー"
            className="absolute"
            style={{
              top: "0%",
              right: "18%",
              width: "28%",
              zIndex: 3,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.06))",
            }}
          />

          {/* 小さいドライフラワー */}
          <img
            src="/sozai/cell_10_r2c4.png"
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{
              top: "15%",
              left: "5%",
              width: "18%",
              zIndex: 3,
              opacity: 0.8,
            }}
          />

          {/* ノート上のテキスト（縦書き風） */}
          <div
            className="absolute"
            style={{
              bottom: "28%",
              left: "20%",
              zIndex: 4,
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              fontSize: "clamp(0.6rem, 1vw, 0.78rem)",
              color: "rgba(44, 62, 80, 0.55)",
              letterSpacing: "0.15em",
              lineHeight: 1.8,
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              transform: "rotate(3deg)",
            }}
          >
            わたしは、どんな言葉で生きていきたいだろう。
          </div>
        </div>
      </div>

      {/* レスポンシブ: モバイル向けのノート画像 */}
      <div
        className="md:hidden relative section-wrapper mt-8"
        style={{ maxHeight: "280px", overflow: "visible" }}
      >
        <div className="relative" style={{ aspectRatio: "4/3" }}>
          <img
            src="/sozai/cell_15_r3c3.png"
            alt="開いたノート"
            className="absolute"
            style={{ bottom: 0, left: "10%", width: "60%", zIndex: 1 }}
          />
          <img
            src="/sozai/cell_09_r2c3.png"
            alt="ドライフラワー"
            className="absolute"
            style={{ top: "5%", right: "15%", width: "25%", zIndex: 2 }}
          />
          <img
            src="/sozai/cell_16_r3c4.png"
            alt="万年筆"
            className="absolute"
            style={{ bottom: "5%", right: "10%", width: "25%", zIndex: 2, transform: "rotate(-15deg)" }}
          />
        </div>
      </div>
    </section>
  );
}
