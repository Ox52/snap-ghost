import * as React from "react";

export default function SnapNinjaLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SnapNinja Logo"
    >
      {/* Background */}
      <rect width="512" height="512" fill="#000000" />

      {/* Chat Bubble / Ninja Head */}
      <path
        d="
          M128 120
          C128 70 384 70 384 120
          V320
          C384 360 340 384 256 384
          C172 384 128 360 128 320
          Z
        "
        fill="#FFFC00"
      />

      {/* Chat Tail */}
      <path
        d="
          M256 384
          L216 448
          L256 424
          L296 448
          Z
        "
        fill="#FFFC00"
      />

      {/* Ninja Mask */}
      <rect x="160" y="190" width="192" height="80" rx="40" fill="#000000" />

      {/* Eyes */}
      <circle cx="216" cy="230" r="20" fill="#FFFC00" />
      <circle cx="296" cy="230" r="20" fill="#FFFC00" />

      {/* Ninja Knot */}
      <path
        d="
          M384 140
          C420 120 450 140 460 160
          C430 160 410 180 400 200
          Z
        "
        fill="#FFFC00"
      />
    </svg>
  );
}
