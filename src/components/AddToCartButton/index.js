import React from "react"
import { CircleAddButton } from "./StyledComponents"
import PropTypes from "prop-types"

export default function AddToCartButton({ onClickHandler }) {
  return <CircleAddButton onClick={onClickHandler}>+</CircleAddButton>
}

AddToCartButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
}
