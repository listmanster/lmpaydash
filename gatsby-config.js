module.exports = {
    siteMetadata: {
        title: `ParserBase`,
      },
      plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        { 
          resolve: `gatsby-plugin-purgecss`,
          options: {
            tailwind: true
          }
        },
        {
          resolve: `gatsby-plugin-create-client-paths`,
          options: {prefixes: [`/app/*`]}
        }
      ]
}