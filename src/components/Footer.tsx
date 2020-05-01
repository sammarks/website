import React from 'react'
import { Row, Col } from 'antd'
import { media, BodySmall } from '@sammarks/web'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SocialLinks } from './SocialLinks'
// @ts-ignore
import kentucky from '../images/kentucky.png'

const RightColumn = styled(Col)`
  text-align: left;
  ${media.md} {
    text-align: right;
  }
`
const CenterColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.md} {
    align-items: center;
  }
`
const Large = styled.div`
  font-size: ${props => props.theme['@size-xm']};
`
const Container = styled.div`
  margin-top: 120px;
  line-height: ${props => props.theme['@line-height-compressed']};
  padding-bottom: 40px;
`
const Made = styled.div`
  margin-top: ${props => props.theme['@size-xxl']};
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme['@gray-2']};
  font-size: 12px;
  > img {
    margin-right: ${props => props.theme['@size-xs']};
    height: 18px;
  }
`

export const Footer: React.FC = () => {
  return (
    <Container>
      <Row align={'middle'}>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 0 }}>
          <Large>Sam Marks</Large>
          <BodySmall color={'@text-color-secondary'}>Developer and designer from Lexington, KY</BodySmall>
        </Col>
        <CenterColumn xs={{ span: 24, order: 0 }} md={{ span: 8, order: 1 }}>
          <SocialLinks />
        </CenterColumn>
        <RightColumn xs={{ span: 24, order: 2 }} md={{ span: 8, order: 2 }}>
          <BodySmall color={'@text-color-secondary'}>Have a project or want to collaborate?</BodySmall>
          <Link to={'/contact'}>
            <Large>Get in Touch &rarr;</Large>
          </Link>
        </RightColumn>
      </Row>
      <Made>
        <img src={kentucky} alt={'Kentucky'} />
        <span>Made in Kentucky</span>
      </Made>
    </Container>
  )
}
