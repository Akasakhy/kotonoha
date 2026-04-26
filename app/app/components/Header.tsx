"use client";

import { useState } from "react";
import { FountainPenIcon, MailIcon } from "./icons";

// ナビゲーションリンクのリスト
const navLinks = [
  { label: "ホーム", href: "#" },
  { label: "ことのはについて", href: "#about" },
  { label: "活動紹介", href: "#activities" },
  { label: "メンバー", href: "#members" },
  { label: "お知らせ", href: "#info" },
  { label: "よくある質問", href: "#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(252, 253, 249, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(44, 62, 80, 0.06)",
      }}
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between py-3">
          {/* ロゴエリア */}
          <div className="flex flex-col" style={{ gap: "2px" }}>
            {/* キャッチコピー */}
            <span
              className="hidden sm:block"
              style={{
                fontSize: "0.6rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.12em",
                lineHeight: 1.4,
              }}
            >
              言葉で、わたしと、世界が静かにつながる。
            </span>
            {/* ロゴ本体 */}
            <div className="flex items-center gap-2">
              <FountainPenIcon
                className="w-5 h-5"
                style={{ color: "var(--color-text)" } as React.CSSProperties}
              />
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  letterSpacing: "0.25em",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                ことのは
              </a>
              {/* 手書き風アンダーライン装飾 */}
              <img
                src="/sozai/cell_06_r1c6.png"
                alt=""
                aria-hidden="true"
                style={{
                  width: "60px",
                  height: "auto",
                  opacity: 0.7,
                  marginTop: "4px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.82rem",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  transition: "color 0.3s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-light)")
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAボタン + ハンバーガー */}
          <div className="flex items-center gap-3">
            <a href="mailto:kotonoha@example.com" className="btn-pill hidden sm:inline-flex">
              <MailIcon className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">お問い合わせ</span>
            </a>

            {/* ハンバーガーボタン（モバイル） */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニューを開く"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  backgroundColor: "var(--color-text)",
                  transition: "all 0.3s",
                  transform: isMenuOpen ? "translateY(5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  backgroundColor: "var(--color-text)",
                  transition: "all 0.3s",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  backgroundColor: "var(--color-text)",
                  transition: "all 0.3s",
                  transform: isMenuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(252, 253, 249, 0.98)",
            borderTop: "1px solid rgba(44, 62, 80, 0.06)",
          }}
        >
          <div className="section-wrapper py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.95rem",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(44,62,80,0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:kotonoha@example.com" className="btn-pill w-fit flex items-center gap-2">
              <MailIcon className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">お問い合わせ</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
