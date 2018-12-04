import React from 'react';

const SvgTusd = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tusd_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="tusd_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="tusd_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#tusd_svg__a)" xlinkHref="#tusd_svg__b" />
        <use fill="#2B2E7F" fillRule="evenodd" xlinkHref="#tusd_svg__b" />
        <use
          fill="url(#tusd_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#tusd_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <g fill="#FFF">
        <path d="M16.413 17.979v-5.06h.666c2.197 0 2.739-2.05 2.739-2.05h-5.773c-2.738 0-3.203 2.05-3.203 2.05h3.405v7.614s2.166-.65 2.166-2.554z" />
        <path d="M22.75 21.922c1.942-2.017 2.686-4.82 1.988-7.5a8.065 8.065 0 0 0-2.143-3.695c-.093-.092-.186-.185-.295-.277l-.093-.092a1.887 1.887 0 0 0-.202-.17l-.124-.092-.186-.138-.11-.077c-.093-.062-.155-.108-.217-.154l-.14-.092c-.062-.046-.124-.077-.186-.108l-.14-.092c-.062-.031-.124-.077-.187-.108l-.14-.078c-.062-.03-.124-.062-.202-.092l-.047-.015c.171.139.341.293.497.447a7.557 7.557 0 0 1 0 10.732c-3.788 3.757-9.937 3.757-13.726 0-.14-.138-.264-.277-.403-.415l-.11-.123a4.976 4.976 0 0 1-.233-.293 10.24 10.24 0 0 0 1.88 2.587c3.959 3.926 10.386 3.926 14.345 0a.53.53 0 0 0 .175-.155z" />
        <path d="M10.664 20.879a7.054 7.054 0 0 1-.498-.447 7.564 7.564 0 0 1 0-10.742c3.792-3.761 9.946-3.761 13.738 0 .264.262.512.54.746.832a10.177 10.177 0 0 0-1.88-2.574c-3.964-3.93-10.397-3.93-14.36 0-.047.046-.093.108-.155.154-2.626 2.744-2.984 6.843-.886 9.957a8.32 8.32 0 0 0 3.295 2.82z" />
      </g>
    </g>
  </svg>
);

export default SvgTusd;
