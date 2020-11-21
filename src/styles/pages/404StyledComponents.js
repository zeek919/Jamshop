import styled from "styled-components"
import { themeColor, themeFont } from "../Themes"

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${themeColor.background};
  display: flex;
  flex-direction: column;
  font-size: 2em;
  font-family: ${themeFont.montserrat};
  justify-content: center;
  align-items: center;
  color: ${themeColor.milkyWhite};
`
