import React from "react"
import Button from './StyledComponents'
import PropTypes from 'prop-types'

export default function BasicButton({ children, onClickHandler }) {
  return (
    <Button type={"button"} onClick={ onClickHandler }>{children}</Button>

    )
}

BasicButton.propTypes = {
  content: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired
}

BasicButton.defaultProps = {
  children: ''
}

