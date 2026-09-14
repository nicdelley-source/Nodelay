import { useId } from "react";

export default function Logo({ size = 32, showWordmark = true, className }) {
  const uid = useId();
  const glassId = `glassBody-${uid}`;
  const rimId = `rimLight-${uid}`;
  const glowId = `innerGlow-${uid}`;
  const glossId = `glyphGloss-${uid}`;
  const blurId = `softBlur-${uid}`;

  return (
    <a href="#" className={className ?? "logo"}>
      <svg viewBox="0 0 300 300" width={size} height={size} role="img" aria-label="NoDelay Logo">
        <defs>
          <linearGradient id={glassId} x1="20%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#5FF0C0" />
            <stop offset="45%" stopColor="#1F9E75" />
            <stop offset="100%" stopColor="#0B4536" />
          </linearGradient>
          <linearGradient id={rimId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={glowId} cx="30%" cy="20%" r="75%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={glossId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D9F5EA" />
          </linearGradient>
          <filter id={blurId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>
        <g>
          <rect x="40" y="30" width="220" height="220" rx="56" fill={`url(#${glassId})`} />
          <rect x="40" y="30" width="220" height="220" rx="56" fill={`url(#${glowId})`} />
          <rect x="41" y="31" width="218" height="218" rx="55" fill="none" stroke={`url(#${rimId})`} strokeWidth="2" />
        </g>
        <ellipse cx="105" cy="80" rx="70" ry="30" fill="#FFFFFF" opacity="0.35" filter={`url(#${blurId})`} transform="rotate(-24 105 80)" />
        <circle cx="90" cy="62" r="7" fill="#FFFFFF" opacity="0.8" />
        <g>
          <path d="M108 92 L165 150 L108 208" stroke={`url(#${glossId})`} strokeWidth="22" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M150 92 L207 150 L150 208" stroke={`url(#${glossId})`} strokeWidth="22" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </g>
      </svg>
      {showWordmark && <span>NoDelay</span>}
    </a>
  );
}
