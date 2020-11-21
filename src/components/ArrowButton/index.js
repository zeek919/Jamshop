import React from "react"
import PropTypes from "prop-types"
import { Button, Line } from "./StyledComponents"

export default function ArrowButton({ onClick, reversed }) {
  return (
    <Button reversed={reversed} onClick={onClick}>
      <Line rotate={45} />
      <Line rotate={-45} />
    </Button>
  )
}

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  reversed: PropTypes.bool,
}

ArrowButton.defaultProps = {
  reversed: false,
}
