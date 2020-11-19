import styled from "styled-components"

export const CartWrapper = styled.button`
  position: absolute;
  top: 0.5em;
  right: 10em;
  display: flex;
  background: transparent;
  border: none;
  color: #fff;
  font-family: "Roboto";
  font-weight: 200;
  z-index: 3;
`

export const ProductCount = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  border-radius: 50%;
  background-color: ${({ isEmpty }) => (isEmpty > 0 ? "#AB528D" : "#301346")};
  font-size: 8px;
  font-family: Roboto;
  width: 12px;
  height: 13px;
  text-align: center;
  font-weight: 400;
`

export const Img = styled.img``
