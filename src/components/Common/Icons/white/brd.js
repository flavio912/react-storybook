import React from 'react';

const SvgBrd = props => (
  <svg width={64} height={64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 9.039v13.922C8 23.535 8.472 24 9.054 24h7.432c4.684 0 6.424-.755 7.49-1.806a3.604 3.604 0 0 0 1.02-2.696c0-2.124-1.32-3.18-3.918-3.634 2.69-.551 3.687-1.806 3.687-3.657a3.43 3.43 0 0 0-.98-2.606C22.697 8.528 21.118 8 16.642 8H9.054C8.472 8 8 8.465 8 9.039zm5.761 5.962v1.817a.687.687 0 0 0 .204.51c.136.136.323.21.516.205h2.38c1.526 0 2.661.04 3.197.568.243.26.368.606.346.96a1.22 1.22 0 0 1-.346.936c-.53.528-1.665.642-3.197.642h-4.5v-9.232h4.546c1.411 0 2.454.085 2.944.567.22.237.33.555.3.875.021.328-.096.65-.323.891-.484.5-1.527.568-2.921.568h-2.443a.698.698 0 0 0-.703.693z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgBrd;
