import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Body, BodySmall } from '@sammarks/web'

const Container = styled.div`
  display: flex;
  align-items: center;
  line-height: ${props => props.theme['@line-height-compressed']};
`
const Left = styled.div`
  flex-grow: 1;
`
const Right = styled.div`
  width: 40%;
  line-height: 1.25;
  text-align: right;
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
