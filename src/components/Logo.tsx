type Props = {
  className?: string;
  width?: number;
};

export default function Logo({ className, width = 240 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 64"
      width={width}
      height={(width / 320) * 64}
      role="img"
      aria-label="GisTrip"
      className={className}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M44 20 Q28 20 24 32 Q22 44 34 48 Q46 50 50 42 L50 34 L38 34"
          stroke="#3DDC97"
          strokeWidth="4"
        />
        <circle cx="44" cy="20" r="3" fill="#F4EAD5" />
        <circle cx="38" cy="34" r="3.5" fill="#FF6B5B" />
      </g>
      <text
        x="72"
        y="42"
        fontFamily="var(--font-display), 'Space Grotesk', Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight={600}
        fill="#F4EAD5"
        letterSpacing="-0.5"
      >
        Gis
        <tspan fill="#FF6B5B">Trip</tspan>
      </text>
    </svg>
  );
}
