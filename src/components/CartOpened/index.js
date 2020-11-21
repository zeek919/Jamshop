import React from "react"
import { Wrapper, Inner, Tbody, ButtonPosition } from "./StyledComponents"
import CartProduct from "../CartProduct"
import { useSelector } from "react-redux"
import BasicButton from "../BasicButton"

export default function CartOpened() {
  const productsData = useSelector((state) => state.cardsData)
  const productsMap = productsData.map(({ price, count, name }, index) => (
    <CartProduct price={price} number={count} name={name} key={index} />
  ))

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Inner>
        <Tbody>{productsMap}</Tbody>
      </Inner>
      <ButtonPosition>
        <BasicButton onClickHandler={() => 1} smaller>
          Submit
        </BasicButton>
      </ButtonPosition>
    </Wrapper>
  )
}
