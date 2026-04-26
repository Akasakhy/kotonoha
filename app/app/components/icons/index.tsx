// SVGアイコン・イラストコンポーネント集

// 万年筆アイコン（ヘッダーロゴ用のシンプル版）
export const FountainPenIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 26L10 22L8 20L12 16L20 8L24 12L16 20L12 22L10 24L6 26Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 8L24 4L26 6L24 12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 20L10 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M10 24L8 26L6 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// メールアイコン（CTAボタン用）
export const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M2 7L10 12L18 7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

// カレンダーアイコン（定例会）
export const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M6 2V5M14 2V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M2 8H18" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="6.5" cy="12" r="1" fill="currentColor" />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
    <circle cx="13.5" cy="12" r="1" fill="currentColor" />
  </svg>
);

// 時計アイコン（定例会）
export const ClockIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
    <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ピン（場所）アイコン（定例会）
export const PinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2C7.24 2 5 4.24 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.24 12.76 2 10 2Z"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

// クリップアイコン（メモ）
export const ClipIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 10L10 17C8.34 18.66 5.66 18.66 4 17C2.34 15.34 2.34 12.66 4 11L11 4C12.1 2.9 13.9 2.9 15 4C16.1 5.1 16.1 6.9 15 8L8 15C7.45 15.55 6.55 15.55 6 15C5.45 14.45 5.45 13.55 6 13L12 7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Instagramアイコン
export const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

// Xアイコン
export const XIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9 3H22L14.5 11.3L23.3 21H16.6L11.4 14.6L5.5 21H2.4L10.4 12.1L2 3H8.9L13.6 8.8L18.9 3ZM17.8 19H19.5L7.3 4.8H5.5L17.8 19Z" fill="currentColor" />
  </svg>
);

// YouTubeアイコン
export const YouTubeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 6.5C22.2 5.4 21.4 4.6 20.3 4.3C18.4 3.8 12 3.8 12 3.8C12 3.8 5.6 3.8 3.7 4.3C2.6 4.6 1.8 5.4 1.5 6.5C1 8.4 1 12 1 12C1 12 1 15.6 1.5 17.5C1.8 18.6 2.6 19.4 3.7 19.7C5.6 20.2 12 20.2 12 20.2C12 20.2 18.4 20.2 20.3 19.7C21.4 19.4 22.2 18.6 22.5 17.5C23 15.6 23 12 23 12C23 12 23 8.4 22.5 6.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M10 15.5L15.5 12L10 8.5V15.5Z" fill="currentColor" />
  </svg>
);

// 本とペンのイラスト（探究授業サポート用）
export const BookPenIllustration = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 本 */}
    <rect x="20" y="35" width="60" height="70" rx="3" stroke="#2C3E50" strokeWidth="1.5" fill="none" />
    <rect x="23" y="35" width="3" height="70" fill="#E8DFD0" opacity="0.6" />
    <path d="M23 38 Q23 35 26 35" stroke="#2C3E50" strokeWidth="1" />
    <path d="M23 102 Q23 105 26 105" stroke="#2C3E50" strokeWidth="1" />
    {/* 本の線 */}
    <path d="M32 55H74" stroke="#2C3E50" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <path d="M32 63H74" stroke="#2C3E50" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <path d="M32 71H74" stroke="#2C3E50" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    <path d="M32 79H60" stroke="#2C3E50" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    {/* ペン */}
    <path d="M72 28L85 15L90 20L77 33" stroke="#2C3E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M72 28L69 35L77 33" stroke="#2C3E50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M69 35L68 37" stroke="#2C3E50" strokeWidth="1" strokeLinecap="round" />
  </svg>
);
