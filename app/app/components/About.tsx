"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger の登録
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 左側の見出しアニメーション
      gsap.fromTo(
        leftRef.current,
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

      // 右側の本文アニメーション
      if (rightRef.current) {
        const paragraphs = rightRef.current.querySelectorAll(".about-p");
        gsap.fromTo(
          paragraphs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--color-base-warm)",
        paddingTop: "clamp(4rem, 10vh, 8rem)",
        paddingBottom: "clamp(4rem, 10vh, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* 波線装飾（左下） */}
        <img
          src="/sozai/cell_01_r1c1.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "10%",
            left: "-5%",
            width: "clamp(200px, 25vw, 350px)",
            opacity: 0.2,
            transform: "scaleX(-1)",
          }}
        />
        {/* 右上の小さいフラワー */}
        <img
          src="/sozai/cell_10_r2c4.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            top: "60%",
            right: "2%",
            width: "clamp(60px, 8vw, 110px)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* レスポンシブ: モバイルは縦積み */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .about-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: clamp(2rem, 6vw, 6rem);
          align-items: start;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}} />

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1 }}>
        <div className="about-grid">
          {/* 左側: 見出しエリア */}
          <div ref={leftRef}>
            {/* 小見出し */}
            <p
              style={{
                margin: "0 0 0.8rem 0",
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.2em",
                fontWeight: 400,
              }}
            >
              ことのはについて
            </p>
            {/* 小見出し下のライン */}
            <div
              style={{
                width: "2rem",
                height: "1px",
                backgroundColor: "var(--color-accent-navy)",
                opacity: 0.3,
                marginBottom: "1.5rem",
              }}
            />
            {/* 大見出し */}
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.3rem, 2.2vw, 1.85rem)",
                fontWeight: 300,
                letterSpacing: "0.06em",
                lineHeight: 1.8,
                color: "var(--color-text)",
              }}
            >
              言葉を通して、<br />
              自分、そして<br />
              他者と向き合う<br />
              きっかけを作る。
            </h2>
          </div>

          {/* 右側: 本文 + コーヒーシミ装飾 */}
          <div ref={rightRef} style={{ position: "relative" }}>
            <p
              className="about-p"
              style={{
                margin: "0 0 1.6rem 0",
                fontSize: "clamp(0.83rem, 1.1vw, 0.93rem)",
                color: "var(--color-text-light)",
                lineHeight: 2.4,
                letterSpacing: "0.08em",
              }}
            >
              私たちは、日々たくさんの言葉に触れています。<br />
              SNSの投稿、誰かの意見、社会の価値観。<br />
              気づかないうちに、他者の言葉に影響を受けているかもしれません。
            </p>

            <p
              className="about-p"
              style={{
                margin: "0 0 1.6rem 0",
                fontSize: "clamp(0.83rem, 1.1vw, 0.93rem)",
                color: "var(--color-text-light)",
                lineHeight: 2.4,
                letterSpacing: "0.08em",
              }}
            >
              ことのはは、言葉を丁寧に扱う時間や場をつくることで、<br />
              自分自身の内側にある想いや問いに気づき、<br />
              他者との対話を通して、新たな視点や気づきを得ることを大切にしています。
            </p>

            <p
              className="about-p"
              style={{
                margin: 0,
                fontSize: "clamp(0.83rem, 1.1vw, 0.93rem)",
                color: "var(--color-text)",
                lineHeight: 2.4,
                letterSpacing: "0.08em",
                fontWeight: 400,
              }}
            >
              その先にあるのは、他者からの影響を受けた言葉ではなく、<br />
              あなただけの「自分の言葉」です。
            </p>

            {/* コーヒーカップの跡（装飾） */}
            <img
              src="/sozai/cell_05_r1c5.png"
              alt=""
              aria-hidden="true"
              className="absolute"
              style={{
                right: "-357px",
                top: "-90px",
                width: "clamp(180px, 40vw, 310px)",
                opacity: 0.6,
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
