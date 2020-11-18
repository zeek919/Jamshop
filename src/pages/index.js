import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #1C042E;
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
      </Layout>
    </>
  )
}
