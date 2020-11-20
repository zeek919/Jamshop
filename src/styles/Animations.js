import { keyframes } from "styled-components"

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%) translateY(-50%); 

  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`

export const fadeInUp = keyframes`
from {
    opacity: 0;
    transform: translateY(50px); 

  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  `

export const fadeFromUp = keyframes`
from {
    opacity: 0;
    transform: translateY(-50px); 

  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const shake = keyframes`
2% {
    transform: rotateZ(40deg);
}
4% {
     transform: rotateZ(-35deg);
}
8% {
      transform: rotateZ(20deg);
}
12% {
      transform: rotateZ(-5deg);
}
16% {
      transform: rotateZ(2deg);
}
20% {
        transform: rotateZ(0eg);
}
100% {
  transform: rotateZ(0deg);
}
`
