import React from "react"
import CartIcon from "../../assets/elements/cart_icon.svg"
import { CartWrapper, ProductCount } from "./StyledComponents"

export default function Cart() {
  return (
    <CartWrapper>
      <img src={CartIcon} />
      <ProductCount>1</ProductCount>
    </CartWrapper>
  )
}
