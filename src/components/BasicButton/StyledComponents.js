import styled, { css } from "styled-components"
import { shake } from "../../styles/Animations"
import { themeColor, themeWeight } from "../../styles/Themes"

const Button = styled.button`
  width: ${({ smaller }) => (smaller ? "8em" : "10em")};
  height: ${({ smaller }) => (smaller ? "2em" : "3em")};
  text-transform: uppercase;
  background-color: ${themeColor.pink};
  border: none;
  color: ${themeColor.white};
  font-size: 13px;
  border-radius: ${({ smaller }) => (smaller ? "0px" : "4px")};
  font-weight: ${themeWeight.bold};
  animation: ${({ animation }) =>
    animation
      ? css`
          ${shake} 5s infinite
        `
      : "none"};
  transition: 0.5s;

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

export default Button
