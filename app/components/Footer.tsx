"use client";

import { FountainPenIcon, InstagramIcon, XIcon, YouTubeIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-base-warm)",
        borderTop: "1px solid rgba(44, 62, 80, 0.08)",
        paddingTop: "clamp(3rem, 6vh, 5rem)",
        paddingBottom: "clamp(1.5rem, 3vh, 2.5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/sozai/cell_10_r2c4.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "10%",
            right: "5%",
            width: "clamp(60px, 8vw, 100px)",
            opacity: 0.3,
          }}
        />
        <img
          src="/sozai/cell_06_r1c6.png"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: "30%",
            left: "5%",
            width: "clamp(80px, 10vw, 130px)",
            opacity: 0.2,
          }}
        />
      </div>

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* メインフッターコンテンツ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
            paddingBottom: "clamp(2rem, 4vh, 3rem)",
            borderBottom: "1px solid rgba(44, 62, 80, 0.08)",
          }}
        >
          {/* 左側: キャッチコピー */}
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                color: "var(--color-text-light)",
                letterSpacing: "0.12em",
                lineHeight: 2.0,
                fontWeight: 300,
              }}
            >
              あなたの言葉が、<br />
              誰かの心に静かに届いていく。
            </p>
          </div>

          {/* 中央: ロゴ + SNSアイコン */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem" }}>
            {/* ロゴ */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FountainPenIcon className="w-4 h-4 text-[var(--color-text)]" />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    fontWeight: 300,
                    letterSpacing: "0.2em",
                    color: "var(--color-text)",
                  }}
                >
                  こ と の は
                </span>
              </div>
              {/* ロゴ下の装飾線 */}
              <img
                src="/sozai/cell_06_r1c6.png"
                alt=""
                aria-hidden="true"
                style={{ width: "80px", opacity: 0.5 }}
              />
            </div>

            {/* SNSアイコン群 */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://instagram.com/kotonoha_2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: "var(--color-text-muted)",
                  transition: "color 0.3s ease",
                  display: "block",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
                }
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/kotonoha_2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                style={{
                  color: "var(--color-text-muted)",
                  transition: "color 0.3s ease",
                  display: "block",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
                }
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@kotonoha_2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{
                  color: "var(--color-text-muted)",
                  transition: "color 0.3s ease",
                  display: "block",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)")
                }
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>

            {/* SNSアカウント名 */}
            <p
              style={{
                margin: 0,
                fontSize: "0.72rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.1em",
              }}
            >
              @kotonoha
            </p>
          </div>

          {/* 右側: リンク */}
          <div style={{ textAlign: "right" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.7rem", alignItems: "flex-end" }}>
              {[
                { label: "プライバシーポリシー", href: "#" },
                { label: "お問い合わせ", href: "mailto:kotonoha@example.com" },
                { label: "運営メンバー募集！", href: "#", highlight: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.82rem",
                    color: link.highlight ? "var(--color-accent-navy)" : "var(--color-text-muted)",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    transition: "color 0.3s ease",
                    fontWeight: link.highlight ? 500 : 400,
                    borderBottom: link.highlight ? "1px solid rgba(44,62,80,0.3)" : "none",
                    paddingBottom: link.highlight ? "1px" : "0",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)")
                  }
                  onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = link.highlight
                    ? "var(--color-accent-navy)"
                    : "var(--color-text-muted)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* コピーライト */}
        <div
          style={{
            paddingTop: "1.2rem",
            textAlign: "right",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.72rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            © 2026 ことのは
          </p>
        </div>
      </div>

      {/* レスポンシブ対応 */}
      <style>{`
        @media (max-width: 767px) {
          footer .section-wrapper > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer .section-wrapper > div:first-child > div:first-child {
            text-align: center;
          }
          footer .section-wrapper > div:first-child > div:last-child {
            text-align: center;
            align-items: center;
          }
          footer .section-wrapper > div:first-child > div:last-child nav {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
