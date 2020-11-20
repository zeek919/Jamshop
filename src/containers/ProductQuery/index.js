import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slider from "../Slider"

export default function ProductQuery() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsProduct {
            nodes {
              name
              slug
              price
              excerpt
              image
              description
              awards
              tag
            }
          }
        }
      `}
      render={({ allGraphCmsProduct: { nodes } }) => (
        <Slider productData={nodes} />
      )}
    />
  )
}
