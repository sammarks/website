const theme = require('./theme')

const config = {
  title: 'Collabra - Interactive Music Education Practice Platform, for Instructors and Students',
  description:
    'Collabra is an interactive practice platform that engages and reinforces the process of practice, ' +
    'while adding increased accountability and feedback.',
  keywords: 'collabra, interactive, music, education, lms, practice platform, recording',
  siteUrl: 'https://collabramusic.com/'
}

module.exports = {
  siteMetadata: config,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    },
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: 'antd',
        style: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: 'Collabra',
        start_url: '/',
        background_color: theme['@component-background'],
        theme_color: theme['@primary-color'],
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}
