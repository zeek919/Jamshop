import React from "react"
import { Backdrop } from "./StyledComponents"
import { useSelector } from "react-redux"

export default function Modal({ children }) {
  const isModalOpen = useSelector((store) => store.modalOpen)
  return <Backdrop isOpen={isModalOpen}>{children}</Backdrop>
}
