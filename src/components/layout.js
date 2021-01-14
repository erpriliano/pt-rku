import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [opacity, setOpacity] = useState(`opacity-0`)

  useEffect(() => {
    setOpacity(`opacity-100`)
  }, [])

  return (
    <>
      <Header />
      <div>
        <main
          className={`inset-x-0 transition-all duration-1000 ease-in-out ${opacity}`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
