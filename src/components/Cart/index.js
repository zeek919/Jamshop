import React from "react"
import CartIcon from "../../assets/elements/cart_icon.svg"
import {
  CartWrapper,
  ProductCount,
  DotPosition,
  ArrowPosition,
} from "./StyledComponents"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_MODAL_STATE } from "../../store/CardManagment/types"
import Arrow from "../Arrow"

export default function Cart() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((store) => store.modalOpen)
  const countOfItems = useSelector((state) => state.cardsData.length)
  const openModalHandler = () => {
    if (countOfItems > 0) {
      dispatch({ type: CHANGE_MODAL_STATE })
    }
  }

  return (
    <CartWrapper onClick={() => openModalHandler()}>
      <DotPosition>
        <img src={CartIcon} />
        <ProductCount isEmpty={countOfItems}>{countOfItems}</ProductCount>
      </DotPosition>
      <ArrowPosition>
        <Arrow isOpen={isModalOpen} isVisible={countOfItems} />
      </ArrowPosition>
    </CartWrapper>
  )
}
