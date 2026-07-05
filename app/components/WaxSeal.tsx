type WaxSealProps = {
  coupleNames: string;
  size?: number;
};

const getInitials = (coupleNames: string) => {
  const parts = coupleNames.split("&").map((p) => p.trim());
  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}&${parts[1].charAt(0)}`;
  }
  return coupleNames.slice(0, 2).toUpperCase();
};

const WaxSeal = ({ coupleNames, size = 140 }: WaxSealProps) => {
  const initials = getInitials(coupleNames);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className="wax-seal-svg"
    >
      <defs>
        <radialGradient id="sealGradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fffdf6" />
          <stop offset="60%" stopColor="#f3ead3" />
          <stop offset="100%" stopColor="#ddcda3" />
        </radialGradient>
      </defs>

      {/* Outer wax blob shape (slightly irregular for a hand-pressed look) */}
      <path
        d="M70 6
           C 100 6, 128 20, 132 50
           C 136 78, 122 104, 96 120
           C 78 132, 56 132, 38 120
           C 12 104, 2 76, 8 48
           C 14 22, 42 6, 70 6 Z"
        fill="url(#sealGradient)"
        stroke="#c9b787"
        strokeWidth="1"
      />

      {/* Ornate inner ring */}
      <circle
        cx="70"
        cy="65"
        r="46"
        fill="none"
        stroke="#b9a26b"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity="0.7"
      />
      <circle
        cx="70"
        cy="65"
        r="52"
        fill="none"
        stroke="#b9a26b"
        strokeWidth="0.8"
        opacity="0.5"
      />

      {/* Decorative corner flourishes */}
      {[0, 90, 180, 270].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 70 65)`}>
          <path
            d="M70 15 C 74 22, 74 28, 70 33"
            fill="none"
            stroke="#b9a26b"
            strokeWidth="1"
            opacity="0.6"
          />
        </g>
      ))}

      {/* Initials */}
      <text
        x="70"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-wonder), cursive"
        fontSize="30"
        fill="#8a6d3b"
      >
        {initials}
      </text>
    </svg>
  );
};

export default WaxSeal;
