import React from 'react';

const SvgDnt = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="dnt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="dnt_svg__b" cx={16} cy={15} r={15} />
      <filter id="dnt_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="dnt_svg__e"
        d="M25.075 18.1a2.338 2.338 0 0 0 1.425-.577c-.551 2.816-2.091 5.587-4.734 7.11-2.022 1.178-4.55 1.57-7.008 1.27-.368-1.062-1.333-2.193-3.01-3.047-2.643-1.362-3.884-3.717-5.01-2.563-.104.1-.19.217-.253.346a4.353 4.353 0 0 1-.138-.323c-2.16-5.356 0-10.736 4.32-14.591 2.574-2.286 5.584-2.032 8.273-.785a1.362 1.362 0 0 0-.506 1.085v5.402a5.435 5.435 0 0 0-6.944 1.258 5.498 5.498 0 0 0 .104 7.088 5.435 5.435 0 0 0 6.978 1.051 1.398 1.398 0 0 0 2.666-.6V6.302c2.068 1.454 3.722 3.301 4.48 4.571.37.638.634 1.332.782 2.055-.325-.24-.704-.4-1.103-.462-.85-.046-1.494 1.109-1.057 2.77.368 1.502-.092 2.818.735 2.864zm-10.363.092c-2.896-1.662-.46-5.933 2.436-4.271.873.485.965 2.032.804 3.024-.299 1.709-1.907 2.009-3.24 1.247zm1.356-11.036c-.644.023-1.103.808-1.08 1.155.022.346.505.554 1.171.323.598-.208 1.15-.07 1.126-.416-.023-.346-.597-1.085-1.217-1.062z"
      />
      <filter id="dnt_svg__d" width="116.7%" height="115.9%" x="-8.3%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#dnt_svg__a)" xlinkHref="#dnt_svg__b" />
      <use fill="#2C398F" fillRule="evenodd" xlinkHref="#dnt_svg__b" />
      <use
        fill="url(#dnt_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#dnt_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#dnt_svg__d)" xlinkHref="#dnt_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#dnt_svg__e" />
    </g>
  </svg>
);

export default SvgDnt;