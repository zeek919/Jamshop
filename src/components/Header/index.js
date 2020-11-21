import React from "react"
import { Link } from "gatsby"
import { HeaderLink, Wrapper } from "./StyledComponents"

export default function Header() {
  return (
    <header>
      <Wrapper>
        <HeaderLink to="/">JAM SHOP</HeaderLink>
      </Wrapper>
    </header>
  )
}
