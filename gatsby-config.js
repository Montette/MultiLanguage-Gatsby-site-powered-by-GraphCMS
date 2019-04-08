module.exports = {
  siteMetadata: {
    title: `Komfrez`,
    description: ``,
    author: `Monika Radosiewicz`,
    keywords: [``],
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "komfrez",
        // This is field under which it's accessible
        fieldName: "komfrez",
        // Url to query from
        url: "https://api-euwest.graphcms.com/v1/cju3s82wo14jx01fc397s2bhb/master",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Unna`,
            subsets: [`latin-ext`],
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `700`, `800`]
          },
        ],
      },
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
