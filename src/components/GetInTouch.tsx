import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Body, BodySmall, media } from '@thesisedu/web'

const Container = styled.div`
  line-height: ${props => props.theme['@line-height-compressed']};
  background: ${props => props.theme['@background-color-dark']};
  margin: ${props => props.theme['@size-m']} -${props => props.theme['@size-s']};
  padding: ${props => props.theme['@padding-sm']};
  a {
    color: ${props => props.theme['@text-color-dark']};
  }
  ${media.md} {
    background: transparent;
    margin: 0;
    padding: 0;
    a {
      color: ${props => props.theme['@primary-color']};
    }
  }
  ${media.lg} {
    display: flex;
    align-items: center;
  }
`
const Left = styled.div`
  flex-grow: 1;
`
const Right = styled.div`
  line-height: 1.25;
  margin-top: ${props => props.theme['@size-s']};
  ${media.lg} {
    margin-top: 0;
    min-width: 50%;
    text-align: right;
  }
`

export const GetInTouch: React.FC = () => (
  <Container>
    <Left>
      <BodySmall color={'@text-color-secondary'}>Have a project or want to collaborate?</BodySmall>
    </Left>
    <Right>
      <Link to={'/contact'}>
        <Body>Get in Touch &rarr;</Body>
      </Link>
      <a href={'mailto:sam@sammarks.me'}>
        <BodySmall color={'@text-color-secondary'}>sam@sammarks.me</BodySmall>
      </a>
    </Right>
  </Container>
)
