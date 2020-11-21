import React from "react"
import {
  Wrapper,
  DataWrapper,
  TextWrapper,
  P,
  H3,
  ButtonWrapper,
  Img,
  ImgPosition,
} from "./StyledComponents"
import dumy from "../../assets/products/dumy.svg"
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
    <Wrapper order={order} to={`/${slug}`} onClick={(e) => e.stopPropagation()}>
      <ImgPosition>
        <Img src={dumy} alt={image} />
      </ImgPosition>
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
  data: PropTypes.object.isRequired,
  order: PropTypes.number.isRequired,
}
