import styled from "styled-components"
import { fadeInUp, slideIn } from "../../styles/Animations"
import { device } from "../../styles/Constants"
import { themeColor, themeFont, themeWeight } from "../../styles/Themes"

export const Section = styled.section`
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: auto;
  position: relative;
  top: 0;
  right: 0;

  @media ${device.laptop} {
    flex-direction: column;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${themeColor.h1};
  font-family: ${themeFont.georgia}, sans-serif;
  font-weight: ${themeWeight.bold};
  font-size: 28px;
`

export const HeroMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 13vw;

  @media ${device.laptop} {
    align-self: center;
    margin: 0;
    width: 40vw;
  }

  @media ${device.mobile} {
    align-self: center;
    margin: 0;
    width: 100vw;
  }
`

export const Decor = styled.img`
  position: relative;
  margin-left: 20vw;
  margin-top: 10vw;
  animation-fill-mode: backwards;
  animation: ${fadeInUp} 1s ease-in-out;

  @media ${device.laptop} {
    align-self: center;
    display: none;
    width: 40vw;
  }
`

export const HeroImageComponent = styled.img`
  margin-left: 15vw;
  width: 30vw;
  margin-top: 164px;
  opacity: 0;
  animation: ${fadeInUp} 1s 1.5s ease-in-out;
  animation-fill-mode: forwards;

  @media ${device.laptop} {
    align-self: center;
    margin-left: 0;
    width: 40vw;
  }

  @media ${device.mobile} {
    align-self: center;
    margin-left: 0;
    width: 60vw;
  }
`

export const HeroBackgroundComponent = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 25vw;
  align-self: flex-start;
  z-index: -1;
  transition: 0.5s;
  animation: ${slideIn} 1s ease-in-out;

  @media ${device.laptop} {
    width: 35vw;
  }
`

export const H1 = styled.h1`
  margin-top: -1vw;
  opacity: 0;
  margin-left: 2vw;
  animation: ${fadeInUp} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;

  @media ${device.laptop} {
    margin-top: 3em;
    text-align: center;
    font-size: 28px;
    margin-left: 0;
  }

  @media ${device.mobile} {
    font-size: 22px;
  }
`

export const ButtonPosition = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 1s 1s ease-in-out;
  animation-fill-mode: forwards;

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    margin-left: 0;
    width: 40vw;
  }

  @media ${device.mobile} {
    width: 100vw;
  }
`
