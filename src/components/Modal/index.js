import React from "react"
import { Backdrop } from "./StyledComponents"
import { useDispatch, useSelector } from "react-redux"

export default function Modal({ children }) {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((store) => store.modalOpen)

  return (
    <Backdrop
      isOpen={isModalOpen}
      onClick={() => dispatch({ type: "CHANGE_MODAL_STATE" })}
    >
      {children}
    </Backdrop>
  )
}
