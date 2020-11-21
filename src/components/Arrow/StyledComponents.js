import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? "0px" : "-15px")});
  transition: 0.5s ease-in-out;
`
export const Line = styled.div`
  width: 2px;
  height: 10px;
  background-color: #eee;
  margin: 0 2.5px;
  transform: rotateZ(${({ reverse }) => (reverse ? "-45" : "45")}deg);
  transition: 0.2s ease-in-out;
`
