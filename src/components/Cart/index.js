import React from "react"
import CartIcon from "../../assets/elements/cart_icon.svg"
import { CartWrapper, ProductCount, Img } from "./StyledComponents"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_MODAL_STATE } from "../../store/CardManagment/types"

export default function Cart() {
  const dispatch = useDispatch()
  const countOfItems = useSelector((state) => state.cardsData.length)
  const openModalHandler = () => {
    if (countOfItems > 0) {
      dispatch({ type: CHANGE_MODAL_STATE })
    }
  }

  return (
    <CartWrapper onClick={() => openModalHandler()}>
      <Img src={CartIcon} />
      <ProductCount isEmpty={countOfItems}>{countOfItems}</ProductCount>
    </CartWrapper>
  )
}
