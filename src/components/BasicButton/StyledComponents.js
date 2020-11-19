import styled from "styled-components"

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
`

export default Button
