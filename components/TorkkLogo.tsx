import React from "react";
import Link from "next/link";

interface TorkkLogoProps {
  className?: string;
  isWhite?: boolean;
}

export default function TorkkLogo({ className = "h-8", isWhite = false }: TorkkLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-1 group ${className}`} aria-label="Torkk Home">
      <svg
        viewBox="0 0 170 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto select-none"
      >
        {/* 'T' with distinctive magenta/pink top bar and stem */}
        <g>
          {/* Magenta/Pink Top Bar */}
          <rect
            x="2"
            y="4"
            width="32"
            height="9"
            rx="4.5"
            fill="#E11D48"
            className="transition-colors group-hover:fill-[#F43F5E]"
          />
          {/* Stem with pink rounded hook accent */}
          <path
            d="M14 13V31C14 34.3137 16.6863 37 20 37V37C23.3137 37 26 34.3137 26 31V13H14Z"
            fill="#E11D48"
          />
        </g>

        {/* 'O' */}
        <path
          d="M60 4C49.5066 4 41 12.5066 41 23C41 33.4934 49.5066 42 60 42C70.4934 42 79 33.4934 79 23C79 12.5066 70.4934 4 60 4ZM60 33C54.4772 33 50 28.5228 50 23C50 17.4772 54.4772 13 60 13C65.5228 13 70 17.4772 70 23C70 28.5228 65.5228 33 60 33Z"
          fill={isWhite ? "#FFFFFF" : "#0F172A"}
        />

        {/* 'R' */}
        <path
          d="M87 4H103C110.18 4 116 9.8203 116 17C116 22.0911 113.064 26.4952 108.825 28.537L117.8 41H107.2L98.6 29H95.5V41H87V4ZM95.5 21.5H102.5C105.261 21.5 107.5 19.2614 107.5 16.5C107.5 13.7386 105.261 11.5 102.5 11.5H95.5V21.5Z"
          fill={isWhite ? "#FFFFFF" : "#0F172A"}
        />

        {/* 'K' */}
        <path
          d="M123 4H131.5V20.5L144.2 4H154.5L138.8 23.3L155.5 41H144.5L131.5 26.5V41H123V4Z"
          fill={isWhite ? "#FFFFFF" : "#0F172A"}
        />

        {/* Second 'K' */}
        <path
          d="M158 4H166.5V20.5L179.2 4H189.5L173.8 23.3L190.5 41H179.5L166.5 26.5V41H158V4Z"
          fill={isWhite ? "#FFFFFF" : "#0F172A"}
          transform="translate(-10, 0) scale(0.92, 1)"
        />
      </svg>
    </Link>
  );
}
