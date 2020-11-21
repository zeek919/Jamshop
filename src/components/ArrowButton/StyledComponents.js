import styled from "styled-components"
import { device } from "../../styles/Constants"
import { themeColor } from "../../styles/Themes"

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border: 3px solid ${themeColor.white};
  border-radius: 50%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateZ(${(props) => (props.reversed ? "180" : "0")}deg);

  @media ${device.desktop} {
    width: 45px;
    height: 40px;
  }

  @media ${device.desktopM} {
    width: 45px;
    height: 40px;
    margin-left: 10px;
  }

  @media ${device.desktopS} {
    width: 40px;
    height: 35px;
    margin-right: 10px;
  }
`

export const Line = styled.div`
  width: 20px;
  height: 4px;
  margin: 4px 0;
  background-color: ${themeColor.white};
  transform: rotateZ(${(props) => props.rotate}deg);

  @media ${device.laptopS} {
    width: 15px;
    margin: 2.5px 0;
  }

  @media ${device.laptopS} {
    width: 15px;
    margin: 2.5px 0;
  }
`
