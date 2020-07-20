const theme = require('./theme')

const config = {
  title: 'Sam Marks',
  description:
    "Sam Marks is a developer, designer, and entrepreneur from Lexington KY. He's worked on several teams, helping " +
    'bring ideas to life through code and pixels.',
  keywords: 'sam, marks, developer, entrepreneur, engineer, designer, lexington, ky',
  siteUrl: 'https://sammarks.me/',
  canonicalUrl: 'https://sammarks.me',
  image: 'https://sammarks.me/icons/icon-512x512.png',
  ogImage: 'https://sammarks.me/og-image.jpg',
  author: {
    name: 'Sam Marks'
  },
  organization: {
    name: 'Sam Marks',
    url: 'https://sammarks.me',
    logo: 'https://sammarks.me/icons/icon-512x512.png'
  },
  social: {
    twitter: '@therealsammarks'
  }
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
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true
              }
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                info: {
                  classes: 'block-info',
                  title: 'optional'
                },
                warning: {
                  classes: 'block-warning',
                  title: 'optional'
                },
                success: {
                  classes: 'block-success',
                  title: 'optional'
                },
                gray: {
                  classes: 'block-gray',
                  title: 'optional'
                },
                point: {
                  classes: 'block-point',
                  title: 'required'
                }
              }
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
        short_name: 'Sam Marks',
        start_url: '/',
        background_color: theme['@component-background'],
        theme_color: theme['@primary-color'],
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-gitinfo',
      options: {
        include: /\.md$/i // Only .md files
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-33197211-1',
        head: false
      }
    }
  ]
}
