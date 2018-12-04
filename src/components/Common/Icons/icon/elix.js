import React from 'react';

const SvgElix = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="elix_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="elix_svg__b" cx={16} cy={15} r={15} />
      <filter id="elix_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <filter id="elix_svg__d" width="129.2%" height="117.5%" x="-14.6%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#elix_svg__a)" xlinkHref="#elix_svg__b" />
      <use fill="#00ADED" fillRule="evenodd" xlinkHref="#elix_svg__b" />
      <use
        fill="url(#elix_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#elix_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#elix_svg__d)" transform="translate(10 5)">
        <path d="M.097 17.603l.002-.004 3.188-7.616-3.19-7.615 5.885 7.615-5.881 7.615-.004.005zm11.776 0l-.004-.005-5.881-7.615 5.885-7.615-3.19 7.615 3.188 7.616.002.004z" />
        <path fillOpacity={0.8} d="M5.985 9.984v5.306L.095 17.6l5.89-7.62V4.674l5.89-2.31-5.89 7.62z" />
        <path
          fillOpacity={0.5}
          d="M5.985 15.29v4.651l-5.89-2.344 5.89-2.315V9.984l-5.89-7.62 5.89 2.31V.023l5.89 2.343-5.89 2.315V9.98l5.89 7.62-5.89-2.31z"
        />
        <path
          fillOpacity={0.145}
          d="M.095 2.366L5.985.023V4.68L.095 2.366zm11.78 15.231l-5.89 2.344v-4.659l5.89 2.315z"
        />
      </g>
    </g>
  </svg>
);

export default SvgElix;
