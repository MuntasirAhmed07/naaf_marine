import * as React from "react";
const SvgComponent = () => (
  <svg
    width={1020}
    height={194}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      transform="rotate(90 1019.77 .921)"
      fill="url(#a)"
      d="M1019.77.921h192.158v1019.53H1019.77z"
    />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.0013 .00024)" />
      </pattern>
      <image
        id="b"
        width={772}
        height={3096}
      />
    </defs>
  </svg>
);
export default SvgComponent;