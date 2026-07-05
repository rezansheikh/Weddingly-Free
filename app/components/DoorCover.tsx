type DoorCoverProps = {
  coupleNames: string;
  isOpening: boolean;
  onTap: () => void;
};

const DoorCover = ({ coupleNames, isOpening, onTap }: DoorCoverProps) => {
  return (
    <div
      className={`door-cover ${isOpening ? "opening" : ""}`}
      onClick={!isOpening ? onTap : undefined}
    >
      {/* Floral arch frame */}
      <svg
        className="door-arch-svg"
        viewBox="0 0 400 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="archGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff6e8" />
            <stop offset="100%" stopColor="#f0d9b5" />
          </linearGradient>
        </defs>
        {/* Arch opening */}
        <path
          d="M60 700 L60 260 C60 140, 130 60, 200 60 C270 60, 340 140, 340 260 L340 700 Z"
          fill="url(#archGlow)"
          opacity="0.15"
        />
        {/* Floral garland dots along the arch */}
        {Array.from({ length: 26 }).map((_, i) => {
          const t = i / 25;
          const angle = Math.PI * (1 - t);
          const cx = 200 + Math.cos(angle) * 145;
          const cy = 240 - Math.sin(angle) * 190;
          const r = 8 + (i % 3) * 3;
          return (
            <circle
              key={i}
              cx={cx}
              cy={Math.max(cy, 62)}
              r={r}
              fill="#f3c6c6"
              opacity="0.8"
            />
          );
        })}
      </svg>

      <div className="door-frame">
        <div className="door-panel door-left">
          <div className="door-panel-inner"></div>
          <div className="door-handle door-handle-left"></div>
        </div>
        <div className="door-panel door-right">
          <div className="door-panel-inner"></div>
          <div className="door-handle door-handle-right"></div>
        </div>
        <div className="door-light-beam"></div>
      </div>

      <div className="door-cover-content">
        <p className="door-couple-names">{coupleNames}</p>
        <p className="envelope-tap-text text-xs uppercase tracking-[4px] text-white/90 font-legan">
          Tap The Doors To Enter
        </p>
      </div>
    </div>
  );
};

export default DoorCover;
