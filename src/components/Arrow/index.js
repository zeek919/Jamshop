import React from "react"
import { Line, Wrapper } from "./StyledComponents"
import PropTypes, { bool, number } from "prop-types"

export default function Arrow({ isOpen, isVisible }) {
  return (
    <Wrapper visible={isVisible}>
      <Line reverse={!isOpen} />
      <Line reverse={isOpen} />
    </Wrapper>
  )
}

Arrow.propTypes = {
  isOpen: PropTypes.oneOf([number, bool]),
  isVisible: PropTypes.bool,
}

Arrow.defaultProps = {
  isVisible: true,
}
