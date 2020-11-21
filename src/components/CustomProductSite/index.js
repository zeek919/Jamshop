import React from "react"
import {
  Wrapper,
  Description,
  Img,
  Information,
  Name,
  Price,
  Tag,
} from "./StyledComponents"
import Layout from "../../layouts"
import GlobalStyle from "../../styles/GlobalStyle"
import dumy from "../../assets/products/dumy.svg"
import BasicButton from "../BasicButton"
import { useDispatch } from "react-redux"

import { AddProductToCart } from "../../store/CardManagment/actions"
import SEO from "../SEO"

export default function CustomProductSite({
  pathContext: {
    product: { tag, name, description, price },
  },
}) {
  const dispatch = useDispatch()
  return (
    <Layout>
      <SEO title={name} description={description} lang={"en"} />
      <GlobalStyle />
      <Wrapper>
        <Img src={dumy} />
        <Information>
          <Tag>{tag}</Tag>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Price>{price}</Price>
          <BasicButton
            onClickHandler={() =>
              dispatch(AddProductToCart({ name: name, price: price }))
            }
          >
            ADD TO CART
          </BasicButton>
        </Information>
      </Wrapper>
    </Layout>
  )
}
