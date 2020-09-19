import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { ResponsiveContextProvider } from '@thesisedu/web/dist'
import * as theme from '../../theme'

import 'modern-normalize'
import './layout.less'
import './code.less'

import { IndexLayoutQueryQuery } from '../graphqlTypes'

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data: IndexLayoutQueryQuery) => (
      <ThemeProvider theme={theme}>
        <ResponsiveContextProvider>
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'keywords', content: data.site.siteMetadata.keywords }
              ]}
            >
              <html lang={'en'} />
            </Helmet>
            {children}
          </div>
        </ResponsiveContextProvider>
      </ThemeProvider>
    )}
  />
)

export default IndexLayout
