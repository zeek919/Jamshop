import React from "react"
import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import GlobalStyle from "../styles/GlobalStyle"
import { Provider } from "react-redux"
import store from "../store/store"

export default function IndexPage() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <SEO title="Home" />
          <Hero />
          <ProductList />
        </Layout>
      </Provider>
    </>
  )
}
