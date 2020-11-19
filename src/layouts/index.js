import React from "react"
import { Provider } from "react-redux"
import store from "../store/store"

import Header from "../components/Header"
import { Wrapper, Main } from "./StyledComponents"

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <footer />
      </Wrapper>
    </Provider>
  )
}
