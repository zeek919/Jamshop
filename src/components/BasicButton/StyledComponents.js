import styled, { css } from "styled-components"
import { shake } from "../../styles/Animations"

const Button = styled.button`
  width: ${({ smaller }) => (smaller ? "8em" : "10em")};
  height: ${({ smaller }) => (smaller ? "2em" : "3em")};
  text-transform: uppercase;
  background-color: #ab528d;
  border: none;
  color: #ffffff;
  font-size: 13px;
  border-radius: ${({ smaller }) => (smaller ? "0px" : "4px")};
  font-weight: 700;
  animation: ${({ animation }) =>
    animation
      ? css`
          ${shake} 5s infinite
        `
      : "none"};
  transition: 0.5s;

  &:hover {
    background-color: transparent;
    border: 2px solid #f8af23;
    color: #f8af23;
    box-shadow: 0px 0px 20px #f8af23;

    transition: 0.5s;
  }

  &:focus {
    outline: none;
  }
`

export default Button
