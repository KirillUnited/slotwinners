module.exports = {
  siteMetadata: {
    title: `Slotwinners`,
    description: `Description`,
    author: `Author`,
    siteUrl: `https://site.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [767, 1366]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Slotwinners`,
        short_name: `Slotwinners`,
        start_url: `/`,
        background_color: `#171925`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#171925`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-web-font-loader`,
  ],
}
