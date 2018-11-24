import React from 'react';

const SvgLbc = props => (
  <svg width={64} height={64} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#006149" r={16} />
      <path
        d="M24.176 17.184l-.797-.199.242-.97 2.485.621-.62 2.485-.971-.242.215-.862-8.872 5.493-9.839-4.916v-3.752l10.224-6.394 9.375 4.573v1.544l-9.759 6.063-7.247-3.593.444-.896 6.749 3.346 8.813-5.476v-.363L16.303 9.59 7.02 15.396v2.58l8.787 4.39z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgLbc;
