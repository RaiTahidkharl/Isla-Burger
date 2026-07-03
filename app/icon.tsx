import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFB627 0%, #F77F00 45%, #E63946 100%)",
          borderRadius: "18px",
        }}
      >
        <svg width="52" height="52" viewBox="0 0 96 96" fill="none">
          <rect x="5" y="5" width="86" height="86" rx="24" fill="#FFF8E7" />
          <path
            d="M18 45c1.8-18.4 15.4-31 30-31s28.2 12.6 30 31H18Z"
            stroke="#1A1206"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M19 61h58c0 12-7 20-18 20H37c-11 0-18-8-18-20Z"
            stroke="#1A1206"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M19 52h58" stroke="#F77F00" strokeWidth="12" strokeLinecap="round" />
          <path
            d="M19 64c0-5 3-8 7-8s7 3 7 8 3 8 7 8 7-3 7-8 3-8 7-8 7 3 7 8 3 8 7 8 7-3 7-8"
            stroke="#E63946"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g fill="#1A1206">
            <ellipse cx="36" cy="31" rx="4.4" ry="2.9" transform="rotate(7 36 31)" />
            <ellipse cx="48" cy="27" rx="4.4" ry="2.9" transform="rotate(7 48 27)" />
            <ellipse cx="60" cy="30" rx="4.4" ry="2.9" transform="rotate(7 60 30)" />
            <ellipse cx="43" cy="38" rx="4.4" ry="2.9" transform="rotate(7 43 38)" />
            <ellipse cx="55" cy="36" rx="4.4" ry="2.9" transform="rotate(7 55 36)" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
