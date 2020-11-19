import styled from "styled-components"

export const Section = styled.section`
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: auto;
  position: relative;
  top: 0;
  right: 0;
`

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e4e3e3;
  font-family: Georgia, sans-serif;
  font-weight: 700;
  font-size: 28px;
`

export const HeroMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  left: 50%;
  margin-right: 13vw;
`

export const Decor = styled.img`
  position: relative;
  margin-left: 20vw;
  margin-top: 10vw;
`

export const HeroImageComponent = styled.img`
  margin-left: 15vw;
  width: 30vw;
  margin-top: 164px;
`

export const HeroBackgroundComponent = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 25vw;
  align-self: flex-start;
  z-index: -1;
`

export const H1 = styled.h1`
  margin-top: -1vw;
`
