import React from "react"
import Button from "./StyledComponents"
import PropTypes from "prop-types"

export default function BasicButton({
  children,
  onClickHandler,
  smaller,
  animation,
}) {
  return (
    <Button
      type={"button"}
      onClick={onClickHandler}
      smaller={smaller}
      animation={animation}
    >
      {children}
    </Button>
  )
}

BasicButton.propTypes = {
  smaller: PropTypes.bool,
  children: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
  animation: PropTypes.bool,
}

BasicButton.defaultProps = {
  smaller: false,
  children: "",
  animation: false,
}
