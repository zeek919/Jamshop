import styled from "styled-components"
import { device } from "../../styles/Constants"
import { themeColor, themeFont } from "../../styles/Themes"
import { fadeInUp } from "../../styles/Animations"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
  margin-bottom: 5vh;
  opacity: 0;

  @media ${device.laptop} {
    margin-top: 8vw;
  }

  animation: ${fadeInUp} 1s 2s;
  animation-fill-mode: forwards;
`

export const TextWrapper = styled.div`
  margin-left: 10vw;
  margin-bottom: 2vw;

  @media ${device.laptop} {
    margin-left: 11.5vw;
  }

  @media ${device.laptopS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    text-align: center;
    margin-top: 10vw;
  }
`

export const CardsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: hidden;
`

export const ProductsWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const H2 = styled.h2`
  font-family: ${themeFont.montserrat};
  font-size: 28px;
  font-weight: 700;
  color: ${themeColor.milkyWhite};

  @media ${device.laptop} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`

export const P = styled.p`
  font-family: ${themeFont.montserrat}, sans-serif;
  font-weight: 200;
  font-size: 16px;
  width: 300px;
  color: ${themeColor.grey};

  @media ${device.laptop} {
    font-size: 14px;
  }

  @media ${device.mobile} {
    font-size: 10px;
  }
`
