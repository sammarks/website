import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import { Container, ExtraLarge } from './styled'
import { Header } from './Header'
import { SocialLinks } from './SocialLinks'
// @ts-ignore
import picture from '../images/picture.jpg'

const HeroContainer = styled.div`
  background: ${props => props.theme['@background-color-black']};
  color: ${props => props.theme['@gray-1']};
  padding-bottom: ${props => props.theme['@size-xxl']};
`

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Container>
        <Header dark leftContent={<SocialLinks />} />
        <Row align={'middle'} gutter={{ sm: 10, md: 20 }}>
          <Col xs={24} md={14}>
            <ExtraLarge>
              Hey, I'm <strong>Sam Marks.</strong> I help bring ideas to life through code and pixels.
            </ExtraLarge>
          </Col>
          <Col xs={0} md={10}>
            <img src={picture} width={'100%'} alt={'Sam Marks'} />
          </Col>
        </Row>
      </Container>
    </HeroContainer>
  )
}
