import React from 'react'
import Helmet from 'react-helmet'

export interface Author {
  name: string
}
export interface Organization {
  url: string
  logo: string
  name: string
}
export interface SchemaOrgProps {
  author: Author
  canonicalUrl: string
  datePublished?: string
  defaultTitle: string
  description: string
  ogImage: string
  isArticle?: boolean
  organization: Organization
  title: string
  url: string
}
export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  author,
  canonicalUrl,
  description,
  title,
  datePublished,
  defaultTitle,
  ogImage,
  isArticle,
  organization,
  url
}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle
    }
  ]
  const schema = isArticle
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image: ogImage
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: ogImage
          },
          description,
          author: {
            '@type': 'Person',
            name: author.name
          },
          publisher: {
            '@type': 'Organization',
            url: organization.url,
            logo: organization.logo,
            name: organization.name
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl
          },
          datePublished
        }
      ]
    : baseSchema

  return (
    <Helmet>
      <script type={'application/ld+json'}>{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
