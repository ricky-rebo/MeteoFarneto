module.exports = {
  siteMetadata: {
    title: 'Meteo Farneto',
    description: 'Stazione di rilevamento metereologico situata a Farneto di Castellarano (RE)',
    siteUrl: 'https://rebottini.it',
    author: 'Riccardo Rebottini',
    menuLinks: [
      { type: 'link', name: 'Home', url: '/' },
      {
        type: 'dropdown',
        name: 'Meteo',
        items: [
          { type: 'link', name: 'Previsioni', url: '/previsioni' },
          { type: 'link', name: 'Grafici', url: '/grafici' },
          { type: 'link', name: 'Glossario', url: '/glossario' }
        ]
      },
      {
        type: 'dropdown',
        name: 'Immagini',
        items: [
          { type: 'link', name: 'Webcam', url: '/webcam' },
          { type: 'link', name: 'Vista da Satellite', url: '/satellite' }
        ]
      },
      { type: 'link', name: 'Qualità dell\'aria', url: '/qualita_aria' }
    ],
    menuSocials: [
      { icon: 'facebook', url: 'https://www.facebook.com/meteofarneto/' },
      { icon: 'twitter', url: 'https://twitter.com/MeteoFarneto' }
    ]
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
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `MDB starter`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/new_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
