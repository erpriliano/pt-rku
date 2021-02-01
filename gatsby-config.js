module.exports = {
  pathPrefix: "/pt-rku",
  siteMetadata: {
    title: `PT. Rezki Karfadz Utama`,
    description: `Company profile website for PT. Rezki Karfadz Utama`,
    author: `@erpriliano`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d1b000`,
        theme_color: `#d1b000`,
        display: `minimal-ui`,
        icon: `src/images/CompanyLogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
