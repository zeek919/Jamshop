import styled from "styled-components"
import { themeColor } from "../../styles/Themes"

export const CircleAddButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${themeColor.pink};
  border: none;
  border-radius: 50%;
  color: ${themeColor.white};
  font-size: 32px;

  &:hover {
    background-color: transparent;
    border: 2px solid ${themeColor.hover};
    color: ${themeColor.hover};
    box-shadow: 0px 0px 20px ${themeColor.hover};

    transition: 0.5s;
  }

  &:focus {
    outline: none;
  }
`
