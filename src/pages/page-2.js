import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/gracias">Gracias page</Link>
  </>
)

export default SecondPage
