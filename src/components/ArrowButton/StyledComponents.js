import styled from "styled-components"

export const Button = styled.button`
  width: 65px;
  height: 65px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background: transparent;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateZ(${(props) => (props.reversed ? "180" : "0")}deg);
  margin: 0 0px;
`

export const Line = styled.div`
  width: 20px;
  height: 4px;
  margin: 4px 0;
  background-color: #ffffff;
  transform: rotateZ(${(props) => props.rotate}deg);
`
