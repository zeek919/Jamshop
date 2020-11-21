import { Link } from "gatsby"
import styled from "styled-components"
import { fadeFromUp } from "../../styles/Animations"
import { device } from "../../styles/Constants"
import { themeColor, themeFont, themeWeight } from "../../styles/Themes"

export const Wrapper = styled.div`
  margin-top: 17px;
  position: absolute;
  opacity: 0;
  animation: ${fadeFromUp} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;
`

export const HeaderLink = styled(Link)`
  position: relative;
  font-family: ${themeFont.montserrat};
  font-weight: ${themeWeight.bold};
  font-size: 22px;
  color: ${themeColor.white};
  text-decoration: none;
  margin-top: 17px;
  margin-left: 57px;

  @media ${device.mobile} {
    margin-left: 1em;
    font-size: 16px;
  }
`
