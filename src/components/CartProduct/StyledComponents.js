import styled from "styled-components"
import { themeColor, themeFont, themeWeight } from "../../styles/Themes"

export const Tr = styled.tr`
  color: ${themeColor.milkyWhite};
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  margin: 10px 0;
`

export const Img = styled.img`
  width: 25px;
`

export const TdBold = styled.td`
  text-transform: uppercase;
  font-family: ${themeFont.montserrat};
  font-weight: ${themeWeight.bold};
`

export const TdRoboto = styled.td`
  font-family: ${themeFont.roboto};
`
