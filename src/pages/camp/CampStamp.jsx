// Selo "Legacy Camp · Camp 27 · Retiro de jovens" desenhado em SVG
// (o PNG original vinha cortado nas bordas).
const CampStamp = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
  >
    <defs>
      <path id="campStampTop" d="M 26 100 A 74 74 0 0 1 174 100" />
      <path id="campStampBottom" d="M 18 100 A 82 82 0 0 0 182 100" />
    </defs>

    <circle cx="100" cy="100" r="97" strokeWidth="2.5" />
    <circle cx="100" cy="100" r="90" strokeWidth="1" />

    <g
      fill="currentColor"
      stroke="none"
      fontFamily="'Space Grotesk', sans-serif"
      fontWeight="700"
      fontSize="14"
      letterSpacing="2.5"
    >
      <text textAnchor="middle">
        <textPath href="#campStampTop" startOffset="50%">
          LEGACY CAMP
        </textPath>
      </text>
      <text textAnchor="middle">
        <textPath href="#campStampBottom" startOffset="50%">
          RETIRO DE JOVENS
        </textPath>
      </text>
      <rect x="17" y="97" width="6" height="6" transform="rotate(45 20 100)" />
      <rect x="177" y="97" width="6" height="6" transform="rotate(45 180 100)" />
      <text
        x="100"
        y="111"
        textAnchor="middle"
        fontSize="22"
        letterSpacing="2"
      >
        CAMP 27
      </text>
    </g>

    <g strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M78 80 L92 58 L99 68 L106 60 L122 80 Z" />
      <path d="M58 88 H142" strokeWidth="1.5" />
      <path d="M58 118 H142" strokeWidth="1.5" />
      <path d="M80 140 L86 126 L92 140 Z M86 140 V145" />
      <path d="M94 140 L100 126 L106 140 Z M100 140 V145" />
      <path d="M108 140 L114 126 L120 140 Z M114 140 V145" />
    </g>
  </svg>
);

export default CampStamp;
