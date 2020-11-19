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
import { useDispatch } from "react-redux"
import { AddProductToCart } from "../../store/CardManagment/actions"

export default function ProductCard({
  data: { name, price, excerpt, slug, image },
  order,
}) {
  const dispatch = useDispatch()

  const addButtonHandler = (e) => {
    e.preventDefault()
    dispatch(AddProductToCart({ name, price }))
  }

  return (
    <Wrapper
      flexOrder={order}
      to={`/${slug}`}
      onClick={(e) => e.stopPropagation()}
    >
      <img src={temporary} />
      <DataWrapper>
        <TextWrapper>
          <H3>{name}</H3>
          <P>{excerpt}</P>
        </TextWrapper>
        <ButtonWrapper>
          <AddToCartButton onClickHandler={addButtonHandler} />
        </ButtonWrapper>
      </DataWrapper>
    </Wrapper>
  )
}

ProductCard.propTypes = {
  order: PropTypes.number.isRequired,
}
