"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarIcon, ClockIcon, PinIcon, ClipIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
  const sectionRef = useRef<HTMLElement>(null);
  const memoRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // メモ枠のアニメーション
      gsap.fromTo(
        memoRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // 右側のアニメーション
      gsap.fromTo(
        rightRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="info"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--color-base-section)",
        paddingTop: "clamp(4rem, 10vh, 8rem)",
        paddingBottom: "clamp(4rem, 10vh, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <img
          src="/sozai/cell_03_r1c3.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            top: "-5%",
            right: "-10%",
            width: "clamp(250px, 30vw, 420px)",
            opacity: 0.06,
            transform: "rotate(180deg)",
          }}
        />
        <img
          src="/sozai/cell_01_r1c1.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "5%",
            right: "30%",
            width: "clamp(120px, 16vw, 200px)",
            opacity: 0.12,
          }}
        />
      </div>

      <div
        className="section-wrapper"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "center",
        }}
      >
        {/* 左側: メモ帳風の枠 */}
        <div ref={memoRef}>
          <div
            className="memo-frame"
            style={{
              padding: "clamp(1.5rem, 4vw, 3rem)",
              position: "relative",
            }}
          >
            {/* クリップ装飾 */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "clamp(1.5rem, 3vw, 2rem)",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <ClipIcon
                className="w-7 h-7"
                style={{ color: "var(--color-text-muted)" } as React.CSSProperties}
              />
            </div>

            {/* 見出し */}
            <h2
              style={{
                margin: "0 0 1.8rem 0",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "var(--color-text)",
              }}
            >
              定例会のお知らせ
            </h2>

            {/* 区切り線 */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(44, 62, 80, 0.1)",
                marginBottom: "1.6rem",
              }}
            />

            {/* 詳細情報 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* 曜日 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <CalendarIcon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--color-text-muted)" } as React.CSSProperties}
                />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(0.88rem, 1.1vw, 0.98rem)",
                    color: "var(--color-text)",
                    letterSpacing: "0.1em",
                  }}
                >
                  毎週 <strong style={{ fontWeight: 500 }}>火曜日</strong>
                </span>
              </div>

              {/* 時間 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <ClockIcon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--color-text-muted)" } as React.CSSProperties}
                />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(0.88rem, 1.1vw, 0.98rem)",
                    color: "var(--color-text)",
                    letterSpacing: "0.1em",
                  }}
                >
                  16:30 〜 18:00
                </span>
              </div>

              {/* 場所 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <PinIcon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--color-text-muted)" } as React.CSSProperties}
                />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(0.88rem, 1.1vw, 0.98rem)",
                    color: "var(--color-text)",
                    letterSpacing: "0.1em",
                  }}
                >
                  ドーム前 <span style={{ opacity: 0.7 }}>shake</span>
                </span>
              </div>
            </div>

            {/* メモの横線（ノート風） */}
            <div style={{ marginTop: "2rem" }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(44, 62, 80, 0.06)",
                    marginBottom: "1.2rem",
                  }}
                />
              ))}
            </div>

            {/* アクセスリンク */}
            <a href="#" className="text-link-arrow">
              アクセスを見る <span>→</span>
            </a>
          </div>
        </div>

        {/* 右側: 画像 + テキスト */}
        <div
          ref={rightRef}
          style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}
        >
          {/* 窓辺の画像 */}
          <div
            style={{
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/sozai/background_section3.png"
              alt="窓辺・花瓶・コーヒーカップの水彩イラスト"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                maxHeight: "280px",
              }}
            />
          </div>

          {/* 本文テキスト */}
          <p
            style={{
              margin: 0,
              fontSize: "clamp(0.83rem, 1.1vw, 0.93rem)",
              color: "var(--color-text-light)",
              lineHeight: 2.4,
              letterSpacing: "0.08em",
            }}
          >
            私たちは、毎週火曜日に定例会を行っています。<br />
            活動の企画を考えたり、言葉について語り合ったり、<br />
            それぞれの「ことのは」を持ち寄る時間です。<br />
            見学だけでも大歓迎です。気軽にお越しください。
          </p>
        </div>
      </div>

      {/* レスポンシブ対応 */}
      <style>{`
        @media (max-width: 767px) {
          #info .section-wrapper > div:first-child,
          #info .section-wrapper > div:last-child {
            grid-column: 1 / -1 !important;
          }
          #info .section-wrapper {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
