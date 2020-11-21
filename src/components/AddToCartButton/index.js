import React from "react"
import { CircleAddButton } from "./StyledComponents"
import PropTypes from "prop-types"

export default function AddToCartButton({ onClickHandler, children }) {
  return <CircleAddButton onClick={onClickHandler}>{children}</CircleAddButton>
}

AddToCartButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  children: PropTypes.string,
}

AddToCartButton.defaultProps = {
  children: "+",
}
