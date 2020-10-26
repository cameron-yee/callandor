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
        short_name: 'Callandor',
        description: 'Static budget dashboard',
        background_color: '#2a4365',
        display: 'minimal-ui',
        theme_color: '#fff',
        start_url: '/',
        icon: 'src/images/favicon.svg'
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`
  ]
}
