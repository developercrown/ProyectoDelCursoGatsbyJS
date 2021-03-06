import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from '../components'

export const query = graphql`
  query GET_DATA{
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku{
      edges{
        node{
          id
          price
          product{
            name
            metadata{
              descripcion
              img
              wear
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripeSku.edges}></Products>
  </>
}

export default IndexPage
