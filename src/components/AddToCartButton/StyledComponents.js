import styled from "styled-components"

export const CircleAddButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: #ab528d;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 32px;

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
