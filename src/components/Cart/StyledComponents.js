import styled from "styled-components"
import { fadeFromUp } from "../../styles/Animations"

export const CartWrapper = styled.button`
  position: absolute;
  top: 0.5em;
  right: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: #fff;
  font-family: "Roboto";
  font-weight: 200;
  z-index: 3;

  &:focus {
    outline: none;
  }

  opacity: 0;
  animation: ${fadeFromUp} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;
`

export const ProductCount = styled.div`
  position: relative;
  margin-top: -25px;
  margin-left: 25px;
  border-radius: 50%;
  background-color: ${({ isEmpty }) => (isEmpty > 0 ? "#AB528D" : "#301346")};
  font-size: 8px;
  font-family: Roboto;
  width: 12px;
  height: 13px;
  text-align: center;
  font-weight: 400;
  transition: 0.5s;
`

export const DotPosition = styled.div`
  position: absolute;
`

export const ArrowPosition = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`
