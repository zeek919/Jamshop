import React, { useState } from "react"
import {
  Wrapper,
  TextWrapper,
  H2,
  P,
  ProductsWrapper,
  CardsWrapper,
  Inside,
} from "./StyledComponents"
import ArrowButton from "../ArrowButton"
import ProductQuery from "../../containers/ProductQuery"

export default function ProductList() {
  const [a, b] = useState(0)

  const handleChangeStartPoint = (action) => {
    if (action === "-") {
      if (a !== 0) {
        b(a - 1)
      }
    } else if (a !== 7) {
      b(a + 1)
    }
  }
  const handleChangeOrder = (index) => {
    if (index < a) {
      return 100
    } else {
      return a + index
    }
  }
  return (
    <Wrapper>
      <TextWrapper>
        <H2>Explore community choices </H2>
        <P>Updated daily based on most popular choices among dev community</P>
      </TextWrapper>
      <ProductsWrapper>
        <ArrowButton
          onClickHandler={() => handleChangeStartPoint("-")}
          reversed
        />
        <CardsWrapper>
          <ProductQuery orderStart={(idx) => handleChangeOrder(idx)} />
        </CardsWrapper>
        <ArrowButton onClickHandler={() => handleChangeStartPoint("+")} />
      </ProductsWrapper>
    </Wrapper>
  )
}
