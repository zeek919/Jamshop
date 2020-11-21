import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../../styles/Constants"
import { themeColor, themeFont, themeWeight } from "../../styles/Themes"

const background = "#331f41"
const border = "#969393"

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${background};
  width: 265px;
  height: 273px;
  border: 3px solid ${border};
  order: ${(props) => props.order};
  flex: 1 0 21%;
  margin: 0 2%;

  &:visited,
  &:link,
  &:focus {
    text-decoration: none;
  }

  @media ${device.desktopS} {
    flex: 1 0 30%;
  }

  @media ${device.laptopS} {
    flex: 1 0 46%;
  }

  @media ${device.mobileL} {
    flex: 1 0 95%;
  }

  &:hover {
    background: transparent;
    border: 3px solid ${themeColor.hover};
    box-shadow: inset 0px 0px 10px ${themeColor.hover};
    transition: 0.5s;
  }

  transition: 0.5s;
`

export const DataWrapper = styled.div`
  display: flex;
  padding: 10px;
`

export const TextWrapper = styled.div`
  font-family: ${themeFont.montserrat}, sans-serif;
  margin-right: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const H3 = styled.h3`
  font-weight: ${themeWeight.bold};
  margin: 0;
  font-size: 18px;
  color: ${themeColor.milkyWhite};
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 1em;

  @media ${device.desktopM} {
    font-size: 16px;
  }

  @media ${device.desktopS} {
    font-size: 15px;
  }

  @media ${device.laptop} {
    font-size: 13px;
  }
  @media ${device.laptopS} {
    font-size: 12px;
  }
`

export const P = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${themeColor.grey};

  @media ${device.desktopM} {
    font-size: 12px;
  }

  @media ${device.desktopS} {
    font-size: 11px;
  }
`

export const Img = styled.img``

export const ImgPosition = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
