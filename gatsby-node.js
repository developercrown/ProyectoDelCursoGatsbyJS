const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    /*console.log('====================================');
    console.log(actions);
    console.log('====================================');*/

    const { createPage } = actions;
    const productTemplate = path.resolve('src/templates/Product.js');
    const result = await graphql(`
      query {
        allStripeSku {
          edges {
            node {
              id
              price
              product {
                name
                metadata {
                  descripcion
                  img
                  wear
                }
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
        throw result.errors
    }

    result.data.allStripeSku.edges.forEach(({node}) => {
        createPage({
            path: `${node.id}`,
            component: productTemplate,
            context: node
        })
    });
}