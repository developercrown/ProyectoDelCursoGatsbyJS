import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const query = graphql`
  query {
    icon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const render = (name, data) => {
  return <Img fluid={data[name].childImageSharp.fluid} alt="swag" />
};

export default function Image({name}) {
  const data = useStaticQuery(query);
  return render(name, data);

    // return <StaticQuery query={query} render={(data) => render(name, data)} />
}