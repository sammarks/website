import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { SeoQuery } from '../graphqlTypes'
import { SchemaOrg } from './SchemaOrg'

const seoQuery = graphql`
  query seo {
    site {
      siteMetadata {
        title
        description
        canonicalUrl
        image
        ogImage
        author {
          name
        }
        organization {
          name
          url
          logo
        }
        social {
          twitter
        }
      }
    }
  }
`

export interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  url?: string
  datePublished?: string
  isArticle?: boolean
}
export const SEO: React.FC<SEOProps> = props => {
  const data = useStaticQuery<SeoQuery>(seoQuery)
  const site = data.site.siteMetadata
  const { title, description = site.description, ogImage: _ogImage, isArticle, url: _url, datePublished } = props
  const url = _url ? `${site.canonicalUrl}${_url}` : site.canonicalUrl
  const seoTitle = title || site.title
  const pageTitle = title ? `${title} - ${site.title}` : site.title
  const ogImage = _ogImage ? `${site.canonicalUrl}${_ogImage}` : site.ogImage
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{pageTitle}</title>
        <meta name={'description'} content={description} />
        <meta name={'image'} content={ogImage} />

        {/* OpenGraph tags */}
        <meta property={'og:url'} content={url} />
        {isArticle ? <meta property={'og:type'} content={'article'} /> : null}
        <meta property={'og:title'} content={seoTitle} />
        <meta property={'og:description'} content={description} />
        <meta property={'og:image'} content={ogImage} />

        {/* Twitter Card tags */}
        <meta name={'twitter:card'} content={'summary_large_image'} />
        <meta name={'twitter:creator'} content={site.social.twitter} />
        <meta name={'twitter:title'} content={seoTitle} />
        <meta name={'twitter:description'} content={description} />
        <meta name={'twitter:image'} content={ogImage} />
      </Helmet>
      <SchemaOrg
        author={site.author}
        canonicalUrl={site.canonicalUrl}
        defaultTitle={site.title}
        description={description}
        ogImage={ogImage}
        organization={site.organization}
        title={seoTitle}
        url={url}
        datePublished={datePublished}
        isArticle={isArticle}
      />
    </>
  )
}
