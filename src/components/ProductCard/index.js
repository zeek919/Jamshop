import React from "react"
import {
  Wrapper,
  DataWrapper,
  TextWrapper,
  P,
  H3,
  ButtonWrapper,
} from "./StyledComponents"
import temporary from "../../assets/products/dumy.svg"
import AddToCartButton from "../AddToCartButton"
import PropTypes from "prop-types"

export default function ProductCard({
  data: { name, price, excerpt, image },
  order,
}) {
  return (
    <Wrapper flexOrder={order}>
      <img src={temporary} />
      <DataWrapper>
        <TextWrapper>
          <H3>{name}</H3>
          <P>{excerpt}</P>
        </TextWrapper>
        <ButtonWrapper>
          <AddToCartButton />
        </ButtonWrapper>
      </DataWrapper>
    </Wrapper>
  )
}

ProductCard.propTypes = {
  order: PropTypes.number.isRequired,
}