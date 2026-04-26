import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

// Noto Serif JP フォントの設定
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

// SEO メタデータ
export const metadata: Metadata = {
  title: "ことのは | 言葉を通して、自分、そして他者と向き合う",
  description:
    "ことのはは、言葉を通して、自分、そして他者と向き合うきっかけをつくる団体です。誰かの言葉ではなく、あなたの「自分の言葉」と出会えることを願っています。",
  keywords: ["ことのは", "言葉", "文学", "ワークショップ", "大学サークル"],
  openGraph: {
    title: "ことのは | 言葉を通して、自分、そして他者と向き合う",
    description:
      "ことのはは、言葉を通して、自分、そして他者と向き合うきっかけをつくる団体です。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className={`${notoSerifJP.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
