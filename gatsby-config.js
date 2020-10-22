module.exports = {
  siteMetadata: {
    title: 'Callandor',
    description: 'Static budget dashboard'
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Callandor',
        description: 'Static budget dashboard',
        background_color: '#fff',
        display: 'minimal-ui',
        theme_color: '#fff',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'password'
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`
  ]
}
