import React from "react"
import PropTypes from "prop-types"
import { Button, Line } from "./StyledComponents"

export default function ArrowButton({ onClickHandler, reversed }) {
  return (
    <Button reversed={reversed} onClick={onClickHandler}>
      <Line rotate={45} />
      <Line rotate={-45} />
    </Button>
  )
}

ArrowButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  reversed: PropTypes.bool,
}

ArrowButton.defaultProps = {
  reversed: false,
}
