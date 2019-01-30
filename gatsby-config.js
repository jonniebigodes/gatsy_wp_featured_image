const dotenv= require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve:`@madetech/gatsby-source-wordpress`,
      options:{
        baseUrl: process.env.WP_SITE,
        hostingWPCOM: true,
        protocol:`https`,
        useACF:false,
        auth:{
          wpcom_app_clientSecret:process.env.WP_SECRET,
          wpcom_app_clientId:process.env.WP_ID,
          wpcom_user:process.env.WP_USERNAME,
          wpcom_pass:process.env.WP_PASSWORD
        },
        verboseOutput: true,
        // includedRoutes: [
        //   "/*/*/posts",
        //   "/*/*/media",
          
        // ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
