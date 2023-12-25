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

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
