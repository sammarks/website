import * as React from 'react'
import { Link } from 'gatsby'
import { BodyLarge, H1, Body, Block } from '@sammarks/web'
import styled from 'styled-components'
import IndexLayout from '../layouts'
import { Container } from '../components/styled'
import { Header } from '../components/Header'
import { SEO } from '../components/SEO'

const ContentContainer = styled.div`
  text-align: center;
`

const NotFoundPage = () => (
  <IndexLayout>
    <SEO title={'404'} />
    <Container>
      <Header />
      <ContentContainer>
        <Block marginTop={'@size-xxl'}>
          <H1>Page not found.</H1>
          <BodyLarge isBlock>Whoops! The page you're trying to find isn't here.</BodyLarge>
          <Body>
            <Link to={'/'}>&larr; Go home</Link>
          </Body>
        </Block>
      </ContentContainer>
    </Container>
  </IndexLayout>
)

export default NotFoundPage
