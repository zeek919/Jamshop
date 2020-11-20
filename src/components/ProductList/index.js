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

export default function ProductList() {
  return (
    <Wrapper>
      <TextWrapper>
        <H2>Explore community choices </H2>
        <P>Updated daily based on most popular choices among dev community</P>
      </TextWrapper>
      <ProductsWrapper>
        <CardsWrapper>
          <ProductQuery orderStart={(idx) => handleChangeOrder(idx)} />
        </CardsWrapper>
      </ProductsWrapper>
    </Wrapper>
  )
}
