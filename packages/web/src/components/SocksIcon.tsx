import React from "react";

import { colors } from "@upswyng/common";

interface Props {
  color?: string;
}

const SocksIcon = (props: Props) => {
  const color = props.color || colors.white;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38.33"
      height="38.325"
      viewBox="0 0 38.33 38.325"
    >
      <g transform="translate(0 -0.082)">
        <path
          fill={color}
          className="a"
          d="M0,9.214H15.869V5.846H0ZM0,.082V3.6H15.869V.082ZM23.257,21.363,12.276,32.344a7.848,7.848,0,0,0,10.689-1.191A8.015,8.015,0,0,0,23.257,21.363ZM18,15.951c-.606-.629-1.325-1.325-2.133-2.133V11.46H0v2.627a7.646,7.646,0,0,1,2.4-.382,6.756,6.756,0,0,1,6.737,6.737,6.8,6.8,0,0,1-3.144,5.7l4.671,4.671L21.775,19.7C21.079,19.005,19.889,17.815,18,15.951Zm-15.607,0a4.868,4.868,0,0,0-2.4.606v3.728l4.327,4.2A4.484,4.484,0,0,0,2.4,15.951Zm0,0"
          transform="translate(0 0)"
        />
        <path
          fill={color}
          d="M303.121,101.75v1.437l.809.808h10.419V101.75Zm15.764,11.363-4.536-4.514v-2.358H306.2c1.033,1.011,1.707,1.684,2.178,2.156.831.853.92.966,1.055,1.123a4.52,4.52,0,0,1,.427.539,10.267,10.267,0,0,1-.18,12.845,10.046,10.046,0,0,1-1.684,1.572l1.145,1.146,11.116-11.138Zm2.852,3.032-10.981,10.981a7.849,7.849,0,0,0,10.689-1.19A8.016,8.016,0,0,0,321.737,116.145ZM303.121,96.137V99.5h11.228V96.137Zm0,0"
          transform="translate(-284.931 -90.291)"
        />
      </g>
    </svg>
  );
};

export default SocksIcon;