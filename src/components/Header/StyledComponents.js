import { Link } from "gatsby"
import styled from "styled-components"
import { fadeFromUp } from "../../styles/Animations"

export const Wrapper = styled.div`
  margin-top: 17px;
  position: absolute;
  opacity: 0;
  animation: ${fadeFromUp} 1s 0.5s ease-in-out;
  animation-fill-mode: forwards;
`

export const HeaderLink = styled(Link)`
  position: relative;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 22px;
  color: white;
  text-decoration: none;
  margin-top: 17px;
  margin-left: 57px;
`
