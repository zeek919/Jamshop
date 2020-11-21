import styled from "styled-components"
import { device } from "../../styles/Constants"
import { themeColor, themeFont, themeWeight } from "../../styles/Themes"

export const Wrapper = styled.section`
  width: 100vw;
  height: 100%;
  background-color: ${themeColor.background};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.laptopS} {
    margin-top: 70px;
    padding-bottom: 70px;
    justify-content: center;
    flex-direction: column;
  }
`

export const Img = styled.img`
  width: 40em;
  margin: 0 5vw;
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.laptopS} {
    width: 80%;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
  @media ${device.laptop} {
    align-items: center;
    margin-top: 50px;
  }
 
}
`

export const Tag = styled.div`
  color: #fbe067;
  font-family: ${themeFont.roboto};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;
  width: 50%;
`

export const Name = styled.div`
  font-family: ${themeFont.roboto};
  padding: 0.5em 0;
  font-style: 700;
  font-weight: ${themeWeight.bold};
  font-size: 32px;
  color: ${themeColor.milkyWhite};
  width: 50%;
`

export const Description = styled.div`
  font-family: ${themeFont.roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  width: 50%;

  color: ${themeColor.grey};
`

export const Price = styled.div`
  font-family: ${themeFont.roboto};
  font-style: normal;
  font-weight: ${themeWeight.bold};
  font-size: 22px;
  line-height: 26px;
  padding: 0.5em 0;
  width: 50%;

  color: ${themeColor.milkyWhite};
`
