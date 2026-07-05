type CurtainCoverProps = {
  coupleNames: string;
  isOpening: boolean;
  onTap: () => void;
};

const CurtainCover = ({ coupleNames, isOpening, onTap }: CurtainCoverProps) => {
  return (
    <div
      className={`curtain-cover ${isOpening ? "opening" : ""}`}
      onClick={!isOpening ? onTap : undefined}
    >
      <div className="curtain-valance"></div>

      <div className="curtain-panel curtain-left">
        <div className="curtain-folds"></div>
        <div className="curtain-tieback curtain-tieback-left"></div>
      </div>
      <div className="curtain-panel curtain-right">
        <div className="curtain-folds"></div>
        <div className="curtain-tieback curtain-tieback-right"></div>
      </div>

      <div className="curtain-cover-content">
        <p className="door-couple-names">{coupleNames}</p>
        <p className="envelope-tap-text text-xs uppercase tracking-[4px] text-white/90 font-legan">
          Tap To Open The Curtains
        </p>
      </div>
    </div>
  );
};

export default CurtainCover;
