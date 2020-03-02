import { keyframes } from "@emotion/core";

export const zoomOutUpRight = keyframes`
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(5000px, -5000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  .zoomOutUpRight {
    animation-name: zoomOutUpRight;
  }`;

export const latePulse = keyframes`
  50% {
    transform: scale3d(1, 1, 1);
  }
  75% {
    transform: scale3d(1.5, 1.5, 1.5);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
.latePulse {
  animation-name: latePulse;
}`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }


.fadeIn {
  animation-name: fadeIn;
}`;
