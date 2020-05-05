import React from 'react'
import { graphql } from 'gatsby'
import { Row, Col } from 'antd'
import { H1 } from '@sammarks/web'
import styled from 'styled-components'
import { PageTemplateQuery } from '../graphqlTypes'
import IndexLayout from '../layouts'
import { Container } from '../components/styled'
import { Header } from '../components/Header'
import { renderAst } from '../components/rehype'
import { MDPageContent } from '../components/MDPageContent'
import { PostFooter } from '../components/PostFooter'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'

const TitleContainer = styled.div`
  text-align: center;
  margin: ${props => props.theme['@size-xl']} auto;
`

export interface PageTemplateProps {
  data: PageTemplateQuery
}
const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.summary}
      ogImage={data.markdownRemark.fields.socialImagePath}
      isArticle
      datePublished={data.markdownRemark.frontmatter.date}
      url={data.markdownRemark.fields.slug}
    />
    <Container>
      <Header />
      <TitleContainer>
        <H1>{data.markdownRemark.frontmatter.title}</H1>
      </TitleContainer>
      <Row justify={'center'}>
        <Col xs={24} lg={20}>
          <MDPageContent>{renderAst(data.markdownRemark.htmlAst)}</MDPageContent>
          <PostFooter
            relativePath={data.markdownRemark.parent.relativePath}
            slug={data.markdownRemark.fields.slug}
            gitLogLatestDate={data.markdownRemark.parent.fields?.gitLogLatestDate}
            title={data.markdownRemark.frontmatter.title}
          />
        </Col>
      </Row>
      <Footer />
    </Container>
  </IndexLayout>
)

export default PageTemplate
export const query = graphql`
  query pageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      parent {
        ... on File {
          relativePath
          fields {
            gitLogLatestDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
      htmlAst
      fields {
        slug
        socialImagePath
      }
      frontmatter {
        title
        summary
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
