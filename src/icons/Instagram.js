import React from "react";
import styled from "@emotion/styled";

const SVG = styled.svg`
  fill: ${props => props.theme.colors.icon};
  height: 37px;
  margin: 0 3px;
`;

export default function Instagram(props) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      version="1.1"
      {...props}
    >
      <path d="M 16 3 C 8.828125 3 3 8.828125 3 16 L 3 34 C 3 41.171875 8.828125 47 16 47 L 34 47 C 41.171875 47 47 41.171875 47 34 L 47 16 C 47 8.828125 41.171875 3 34 3 Z M 37 11 C 38.101562 11 39 11.898438 39 13 C 39 14.101562 38.101562 15 37 15 C 35.898438 15 35 14.101562 35 13 C 35 11.898438 35.898438 11 37 11 Z M 25 14 C 31.070312 14 36 18.929688 36 25 C 36 31.070312 31.070312 36 25 36 C 18.929688 36 14 31.070312 14 25 C 14 18.929688 18.929688 14 25 14 Z M 25 16 C 20.039062 16 16 20.039062 16 25 C 16 29.960938 20.039062 34 25 34 C 29.960938 34 34 29.960938 34 25 C 34 20.039062 29.960938 16 25 16 Z M 25 16 " />
    </SVG>
  );
}
