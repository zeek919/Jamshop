import React from "react"
import { createGlobalStyle, injectGlobal } from "styled-components"
import "../layouts/layout.css"
import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"

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
        <SEO title="Home" />
        <Hero />
        <ProductList />
      </Layout>
    </>
  )
}
