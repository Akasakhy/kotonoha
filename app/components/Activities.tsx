"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookPenIllustration } from "./icons";

gsap.registerPlugin(ScrollTrigger);

// 活動データ
const activities = [
  {
    id: "radio",
    title: "学内ラジオ放送",
    description: "言葉を届け、つながる場。学生の声をラジオから発信します。",
    image: "/sozai/cell_17_r3c5.png",
    imageAlt: "ラジオのイラスト",
    useSvg: false,
  },
  {
    id: "research",
    title: "探究授業サポート",
    description: "中高生の探究学習をサポート。言葉で考え、伝える力を育みます。",
    image: null,
    imageAlt: "本とペンのイラスト",
    useSvg: true,
  },
  {
    id: "career",
    title: "進路相談会",
    description: "先輩との対話を通して、自分らしい進路を一緒に考えます。",
    image: "/sozai/cell_22_r4c4.png",
    imageAlt: "進路相談のイラスト",
    useSvg: false,
  },
  {
    id: "workshop",
    title: "ワークショップ",
    description: "テーマに沿って語り合い、新しい気づきを生み出します。",
    image: "/sozai/cell_21_r4c3.png",
    imageAlt: "グループワークのイラスト",
    useSvg: false,
  },
  {
    id: "others",
    title: "その他の活動",
    description: "イベント出展やコラボ企画など、言葉を広げる場をつくります。",
    image: "/sozai/cell_23_r4c5.png",
    imageAlt: "ガーランドのイラスト",
    useSvg: false,
  },
];

export default function Activities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 見出しアニメーション
      gsap.fromTo(
        headingRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // カードのスタガーアニメーション
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".activity-card");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="activities"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--color-base)",
        paddingTop: "clamp(4rem, 10vh, 8rem)",
        paddingBottom: "clamp(4rem, 10vh, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <img
          src="/sozai/cell_08_r2c2.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            top: "10%",
            right: "-5%",
            width: "clamp(150px, 20vw, 280px)",
            opacity: 0.08,
          }}
        />
        <img
          src="/sozai/cell_01_r1c1.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "8%",
            left: "3%",
            width: "clamp(180px, 22vw, 300px)",
            opacity: 0.15,
            transform: "rotate(10deg)",
          }}
        />
      </div>

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* 見出しエリア */}
        <div ref={headingRef} className="text-center" style={{ marginBottom: "clamp(2.5rem, 5vh, 4.5rem)" }}>
          <p
            style={{
              margin: "0 0 0.5rem 0",
              fontSize: "0.72rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.2em",
            }}
          >
            ACTIVITIES
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 300,
              letterSpacing: "0.15em",
              color: "var(--color-text)",
            }}
          >
            活動紹介
          </h2>
          {/* 見出し下の装飾ライン */}
          <div
            style={{
              width: "2rem",
              height: "1px",
              backgroundColor: "var(--color-accent-navy)",
              opacity: 0.3,
              margin: "1rem auto 0",
            }}
          />
        </div>

        {/* カードグリッド */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "clamp(1rem, 2.5vw, 2rem)",
          }}
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="activity-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
                padding: "1.5rem 0.75rem",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "rgba(200, 220, 232, 0.12)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* イラスト */}
              <div
                style={{
                  width: "clamp(80px, 10vw, 120px)",
                  height: "clamp(80px, 10vw, 120px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {activity.useSvg ? (
                  <BookPenIllustration className="w-full h-full" />
                ) : activity.image ? (
                  <img
                    src={activity.image}
                    alt={activity.imageAlt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : null}
              </div>

              {/* タイトル */}
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(0.8rem, 1vw, 0.92rem)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "var(--color-text)",
                  lineHeight: 1.5,
                }}
              >
                {activity.title}
              </h3>

              {/* 説明文 */}
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(0.7rem, 0.85vw, 0.78rem)",
                  color: "var(--color-text-light)",
                  lineHeight: 1.9,
                  letterSpacing: "0.06em",
                }}
              >
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* 詳細リンク */}
        <div
          style={{
            textAlign: "right",
            marginTop: "clamp(2rem, 4vh, 3rem)",
          }}
        >
          <a href="#" className="text-link-arrow">
            活動の詳細を見る <span>→</span>
          </a>
        </div>
      </div>

      {/* レスポンシブ対応 */}
      <style>{`
        @media (max-width: 1023px) {
          #activities [style*="repeat(5, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #activities [style*="repeat(5, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
