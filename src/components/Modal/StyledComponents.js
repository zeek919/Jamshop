import styled from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  display: block;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(28, 4, 46, 0.55);
  backdrop-filter: blur(8px);
  background-size: cover;
  z-index: 1;
  overflow-y: hidden;
`
