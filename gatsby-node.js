const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CustomProductSite = path.resolve(
    `./src/components/CustomProductSite/index.js`
  )
  const query = await graphql(`
    {
      allGraphCmsProduct {
        nodes {
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

  const { allGraphCmsProduct } = query.data

  allGraphCmsProduct.nodes.forEach((product) => {
    createPage({
      path: product.slug,
      component: CustomProductSite,
      context: { product },
    })
  })
}
