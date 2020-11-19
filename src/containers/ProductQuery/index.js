import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProductCard from "../../components/ProductCard"

export default function ProductQuery({ orderStart }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          jamshop {
            products {
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
      render={({ jamshop: { products } }) =>
        products.map((product, index) => (
          <ProductCard
            data={product}
            key={product.name}
            order={() => orderStart(index)}
          />
        ))
      }
    />
  )
}
