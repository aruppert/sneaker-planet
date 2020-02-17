import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-flow: column;
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.background};
          > link {
            text-decoration: none;
          }
          #root {
            display: flex;
            flex-flow: column;
            height: 100vh;
            width: 100vw;
          }
        }
      `}
    />
  );
}

export default GlobalStyles;
