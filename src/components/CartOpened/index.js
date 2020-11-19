import React from "react"
import { Wrapper, Inner, Tbody } from "./StyledComponents"
import CartProduct from "../CartProduct"
import { useSelector } from "react-redux"

export default function CartOpened() {
  const productsData = useSelector((state) => state.cardsData)
  const productsMap = productsData.map((product) => (
    <CartProduct price={product.price} number={1} name={product.name} />
  ))

  return (
    <Wrapper>
      <Inner>
        <Tbody>{productsMap}</Tbody>
      </Inner>
    </Wrapper>
  )
}
