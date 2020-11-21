import React from "react"
import {
  Wrapper,
  TextWrapper,
  H2,
  P,
  ProductsWrapper,
  CardsWrapper,
} from "./StyledComponents"
import ProductQuery from "../../containers/ProductQuery"
import { graphql, StaticQuery } from "gatsby"

export default function ProductList() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsIndex {
            nodes {
              title
              lead
            }
          }
        }
      `}
      render={({ allGraphCmsIndex }) => {
        const { title, lead } = allGraphCmsIndex.nodes[0]
        return (
          <Wrapper>
            <TextWrapper>
              <H2>{title}</H2>
              <P>{lead}</P>
            </TextWrapper>
            <ProductsWrapper>
              <CardsWrapper>
                <ProductQuery />
              </CardsWrapper>
            </ProductsWrapper>
          </Wrapper>
        )
      }}
    />
  )
}
