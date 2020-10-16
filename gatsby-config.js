module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`
  ]
}
