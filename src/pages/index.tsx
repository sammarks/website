import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { Row, Col } from 'antd'
import { Body, Block } from '@thesisedu/web'
import { Link } from 'gatsby'
import { Container } from '../components/styled'
import { Hero } from '../components/Hero'
import { PostList } from '../components/PostList'
import { GetInTouch } from '../components/GetInTouch'
import { Pushed } from '../components/Pushed'
import { Footer } from '../components/Footer'

import IndexLayout from '../layouts'
import { SEO } from '../components/SEO'

const HomeContainer = styled.div`
  background: ${props => props.theme['@gray-1']};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const ContentContainer = styled.div`
  margin: -${props => props.theme['@size-xxl']} -${props => props.theme['@size-l']} 0 -${props => props.theme['@size-l']};
  padding: ${props => props.theme['@size-l']};
  padding-bottom: 0;
  background: white;
  border-radius: ${props => props.theme['@border-radius-base']};
  box-shadow: 0 20px 20px ${props => transparentize(0.8, props.theme['@gray-2'])};
`

const IndexPage = () => (
  <IndexLayout>
    <SEO />
    <HomeContainer>
      <Hero />
      <Container style={{ flexGrow: 1, display: 'flex', width: '100%', flexDirection: 'column' }}>
        <ContentContainer>
          <Row gutter={{ sm: 10, md: 20 }}>
            <Col xs={24} md={14} lg={16}>
              <Block marginBottom={'@size-m'}>
                <Body color={'@text-color-secondary'}>Here's what I've been writing about:</Body>
              </Block>
              <PostList limit={5} allowExpand={false} />
              <Link to={'/posts'}>
                <Body>View all posts &rarr;</Body>
              </Link>
            </Col>
            <Col xs={24} md={10} lg={8}>
              <Block marginBottom={'@size-m'}>
                <GetInTouch />
              </Block>
              <Pushed />
            </Col>
          </Row>
          <Footer />
        </ContentContainer>
      </Container>
    </HomeContainer>
  </IndexLayout>
)

export default IndexPage
