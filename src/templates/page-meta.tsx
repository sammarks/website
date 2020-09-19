import React from 'react'
import { graphql } from 'gatsby'
import { transparentize } from 'polished'
import { styled, BodyLarge, Body, H1, H1Subtitle } from '@thesisedu/web/dist'
import pluralize from 'pluralize'
import IndexLayout from '../layouts'
import { PageMetaTemplateQuery } from '../graphqlTypes'

const Container = styled.div`
  background: ${props => props.theme['@background-color-base']};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TopContainer = styled.div`
  height: 50vh;
  background: ${props => props.theme['@background-color-black']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
`
const TopContainerInner = styled.div`
  padding: 0 80px 130px 80px;
  line-height: 1.3;
`
const ContentContainer = styled.div`
  margin: -100px 60px 0 60px;
  background: white;
  border-radius: ${props => props.theme['@border-radius-base']};
  box-shadow: 0 20px 20px ${props => transparentize(0.8, props.theme['@gray-2'])};
  padding: 60px;
  height: calc(50vh + 100px);
  text-align: center;
  width: calc(100% - 120px);
`

export interface PageMetaTemplateProps {
  data: PageMetaTemplateQuery
}
const PageMetaTemplate: React.FC<PageMetaTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Container>
      <TopContainer>
        <TopContainerInner>
          <BodyLarge color={'@gray-2'} style={{ fontWeight: 600, fontSize: 36 }}>
            Sam Marks
          </BodyLarge>
          <Body color={'@text-color-secondary'}>Developer, Designer & Entrepreneur from Lexington KY</Body>
        </TopContainerInner>
      </TopContainer>
      <ContentContainer>
        <H1 style={{ fontSize: 56 }}>{data.markdownRemark.frontmatter.title}</H1>
        <H1Subtitle style={{ fontSize: 32 }}>
          Takes {pluralize('minute', data.markdownRemark.timeToRead, true)}. Read now @ sammarks.me &rarr;
        </H1Subtitle>
      </ContentContainer>
    </Container>
  </IndexLayout>
)

export default PageMetaTemplate
export const query = graphql`
  query pageMetaTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
