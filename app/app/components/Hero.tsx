"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

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

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.6 }
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
      </div>

      {/* メインコンテンツ */}
      <div
        className="section-wrapper relative grid grid-cols-1 md:grid-cols-2"
        style={{
          zIndex: 1,
          gap: "clamp(1rem, 3vw, 3rem)",
          alignItems: "center",
          minHeight: "calc(100svh - 180px)",
        }}
      >
        {/* 左側: テキスト */}
        <div ref={textRef} className="flex flex-col items-center md:items-start text-center md:text-left" style={{ gap: "1.8rem" }}>
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
            ことのはは、言葉を通して、<br className="hidden md:inline" />
            自分、そして他者と向き合うきっかけをつくる団体です。<br className="hidden md:inline" />
            誰かの言葉ではなく、<br className="hidden md:inline" />
            あなたの「自分の言葉」と出会えることを願っています。
          </p>

          <div className="hero-item flex items-center justify-center md:justify-start gap-4 flex-wrap">
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

        {/* 右側: 一枚画像 */}
        <div
          ref={imageRef}
          className="relative hidden md:flex items-center justify-center"
          style={{ width: "100%" }}
        >
          <img
            src="/sozai/hero_notebook_2.png"
            alt="ノートと万年筆とドライフラワーのイラスト"
            style={{
              width: "200%",
              maxWidth: "2000px",
              height: "auto",
              objectFit: "contain",
              transform: "translateX(15%)",
              filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.08))",
            }}
          />
        </div>
      </div>

      {/* レスポンシブ: モバイル */}
      <div className="md:hidden relative section-wrapper mt-8">
        <img
          src="/sozai/hero_notebook_2.png"
          alt="ノートと万年筆とドライフラワーのイラスト"
          style={{
            width: "110%",
            height: "auto",
            transform: "translateX(5%)",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}
