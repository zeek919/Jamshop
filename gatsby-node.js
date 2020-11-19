const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CustomProductSite = path.resolve(
    `./src/components/CustomProductSite/index.js`
  )
  const query = await graphql(`
    {
      jamshop {
        products {
          name
          slug
          price
          excerpt
          image
          tag
          awards
          description
        }
      }
    }
  `)

  const { products } = query.data.jamshop

  products.forEach((product) => {
    createPage({
      path: product.slug,
      component: CustomProductSite,
      context: { product },
    })
  })
}
