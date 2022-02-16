import React from "react";

const LoadingComponent = ({ size = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // style="margin: auto; background: none; display: block; shape-rendering: auto;"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#ffffff"
        stroke-width="5"
        r="28"
        stroke-dasharray="131.94689145077132 45.982297150257104"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1.282051282051282s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default LoadingComponent;
