import React from "react"
import { createGlobalStyle } from "styled-components"
import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import Modal from "../components/Modal"
import CartOpened from "../components/CartOpened"

const GlobalStyle = createGlobalStyle`


  body {
    padding: 0;
    margin: 0;  
    background-color: #1C042E;
    overflow-x: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export default function IndexPage() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Modal>
          <CartOpened />
        </Modal>
        <SEO title="Home" />
        <Hero />
        <ProductList />
      </Layout>
    </>
  )
}
