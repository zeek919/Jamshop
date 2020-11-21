import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import GlobalStyle from "../styles/GlobalStyle"
import { Wrapper } from "../styles/pages/404StyledComponents"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <GlobalStyle />
      <Wrapper>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Wrapper>
    </Layout>
  )
}
