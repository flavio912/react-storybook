import React from 'react';

const SvgXp = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="xp_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xp_svg__b" cx={16} cy={15} r={15} />
      <filter id="xp_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="xp_svg__e"
        d="M14.79 22h-1.798l-1.082-4.25 2.645-1.382.861 2.46.641-3.245 3.515-1.837-.194.976 2.03.019c.784-.012 1.391-.277 1.823-.793.432-.517.637-1.21.615-2.083a2.31 2.31 0 0 0-.035-.335l2.73-1.427c.378.695.522 1.514.434 2.455-.146 1.372-.74 2.47-1.779 3.293-1.039.824-2.364 1.236-3.973 1.236l-2.306-.01L17.94 22h-3.15zm.421-10.99h1.75l-2.697 3.825-6.66 3.481 2.468-3.49L7.7 8h3.48l1.23 4.789 1.052-1.78h1.75-1.75L15.34 8h2.215l5.126.01c1.165.032 2.12.341 2.866.927l-2.8 1.464a1.773 1.773 0 0 0-.208-.026l-2.294-.02-.3 1.51-3.517 1.838.532-2.694h-1.75zm-9.425 9.942l5.327-2.785L8.765 22H5l.767-1.085.019.037z"
      />
      <filter id="xp_svg__d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xp_svg__a)" xlinkHref="#xp_svg__b" />
      <use fill="#008200" xlinkHref="#xp_svg__b" />
      <use
        fill="url(#xp_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#xp_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xp_svg__d)" xlinkHref="#xp_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xp_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXp;
