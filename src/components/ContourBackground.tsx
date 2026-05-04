export default function ContourBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="contour-bg absolute -bottom-40 -right-40 h-[160%] w-[160%]"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMaxYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="#3DDC97"
          strokeWidth="1"
          strokeOpacity="0.04"
          strokeLinejoin="round"
        >
          <path d="M120 700 C 220 660, 320 700, 420 640 S 640 540, 760 580 L 800 800 L 0 800 Z" />
          <path d="M80 640 C 200 580, 340 640, 460 560 S 660 460, 800 500" />
          <path d="M40 560 C 180 480, 360 560, 500 460 S 700 360, 820 400" />
          <path d="M-20 480 C 160 380, 380 480, 540 360 S 740 260, 860 300" />
          <path d="M-60 400 C 140 280, 400 400, 580 260 S 780 160, 900 200" />
          <path d="M-100 320 C 120 180, 420 320, 620 160 S 820 60, 940 100" />
          <path d="M-140 240 C 100 80, 440 240, 660 60 S 860 -40, 980 0" />
        </g>
        <circle cx="500" cy="460" r="4" fill="#FF6B5B" fillOpacity="0.3" />
      </svg>
    </div>
  );
}
