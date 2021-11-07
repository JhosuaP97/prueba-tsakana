import * as React from "react";

export const ArrowButtonRight = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={71} height={71} {...props}>
      <defs>
        <filter
          id="prefix__a"
          x={0}
          y={0}
          width={71}
          height={71}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g data-name="Grupo 13003">
        <g transform="translate(0 .002)" filter="url(#prefix__a)">
          <circle
            data-name="Elipse 1"
            cx={26.5}
            cy={26.5}
            r={26.5}
            transform="translate(9 6)"
            fill="#fff"
          />
        </g>
        <path
          data-name="Icon feather-chevron-left"
          d="M31.893 39.827l7.005-7.005-7.005-7.005"
          fill="none"
          stroke="#333e48"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
      </g>
    </svg>
  );
};
