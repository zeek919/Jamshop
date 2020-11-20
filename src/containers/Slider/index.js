import React, { useState } from "react"
import ArrowButton from "../../components/ArrowButton"
import ProductCard from "../../components/ProductCard"
import { Container, Inner } from "../ProductQuery/StyledComponents"

export default function Slider({ productData }) {
  const [currentIndex, changeCurrentIndex] = useState(0)

  const generateOrder = (itemIndex) => {
    const lengthOfData = productData.length || 0

    if (itemIndex - currentIndex < 0) {
      return lengthOfData - Math.abs(itemIndex - currentIndex)
    }

    return itemIndex - currentIndex
  }

  const handleNext = () => {
    const maxDataLength = productData.length

    const nextIndex = currentIndex === maxDataLength ? 0 : currentIndex + 1
    changeCurrentIndex(nextIndex)
  }

  const handlePrev = () => {
    const maxDataLength = productData.length

    const nextIndex = currentIndex === 0 ? maxDataLength - 1 : currentIndex - 1
    changeCurrentIndex(nextIndex)
  }

  const renderSliders = productData.map((item, index) => (
    <ProductCard data={item} order={generateOrder(index)} />
  ))

  return (
    <>
      <Container>
        <ArrowButton reversed onClick={handlePrev} />
        <Inner>{renderSliders}</Inner>
        <ArrowButton onClick={handleNext} />
      </Container>
    </>
  )
}
