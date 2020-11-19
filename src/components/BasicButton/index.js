import React from "react"
import Button from "./StyledComponents"
import PropTypes from "prop-types"

export default function BasicButton({ children, onClickHandler, smaller }) {
  return (
    <Button type={"button"} onClick={onClickHandler} smaller={smaller}>
      {children}
    </Button>
  )
}

BasicButton.propTypes = {
  smaller: PropTypes.bool,
  children: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
}

BasicButton.defaultProps = {
  smaller: false,
  children: "",
}
