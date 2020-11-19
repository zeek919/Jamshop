import React from "react"

import Header from "../components/Header"
import { Wrapper, Main } from "./StyledComponents"

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <footer />
    </Wrapper>
  )
}
