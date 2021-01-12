import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
