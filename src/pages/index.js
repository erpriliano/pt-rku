import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
import Service from "../components/services"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Service />
  </Layout>
)

export default IndexPage
