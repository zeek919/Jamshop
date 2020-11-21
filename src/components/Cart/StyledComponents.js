import styled from "styled-components"
import { fadeFromUp } from "../../styles/Animations"
import { device } from "../../styles/Constants"
import { themeColor, themeFont, themeWeight } from "../../styles/Themes"

export const CartWrapper = styled.button`
  position: absolute;
  top: 0.5em;
  right: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: ${themeColor.white};
  font-family: ${themeFont.roboto};
  font-weight: ${themeWeight.light};
  z-index: 3;

  &:focus {
    outline: none;
  }

  opacity: 0;
  animation: ${fadeFromUp} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;

  @media ${device.laptop} {
    right: 5em;
  }

  @media ${device.mobile} {
    right: 0em;
  }
`

export const ProductCount = styled.div`
  position: relative;
  margin-top: -25px;
  margin-left: 25px;
  border-radius: 50%;
  background-color: ${({ isEmpty }) =>
    isEmpty > 0 ? themeColor.pink : themeColor.black};
  font-size: 8px;
  font-family: ${themeFont.roboto};
  width: 12px;
  height: 13px;
  text-align: center;
  transition: 0.5s;
`

export const DotPosition = styled.div`
  position: absolute;
`

export const ArrowPosition = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`
