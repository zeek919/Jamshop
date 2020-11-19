import React from "react"
import Header from "../components/Header"
import { Wrapper, Main } from "./StyledComponents"
import Cart from "../components/Cart"
import CartOpened from "../components/CartOpened"
import Modal from "../components/Modal"

export default function Layout({ children }) {
  return (
    <wrapRootElement>
      <Wrapper>
        <Header />
        <Cart />
        <Modal>
          <CartOpened />
        </Modal>
        <Main>{children}</Main>
        <footer />
      </Wrapper>
    </wrapRootElement>
  )
}
