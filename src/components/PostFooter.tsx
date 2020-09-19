import React from 'react'
import { Row, Col } from 'antd'
import { styled, media, BodySmall, Body } from '@thesisedu/web/dist'
import { TwitterShareButton, FacebookShareButton } from 'react-share'
// @ts-ignore
import profileRoundLarge from '../images/profile-round-large.png'

const Container = styled.div`
  margin-top: ${props => props.theme['@size-xxl']};
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  ${media.lg} {
    align-items: flex-end;
    text-align: right;
  }
`
const LinkGroup = styled.div`
  > a:last-child {
    display: block;
  }
  margin: ${props => props.theme['@size-xxs']} 0 ${props => props.theme['@size-m']} 0;
  ${media.lg} {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
  color: ${props => props.theme['@primary-color']};
  > span {
    color: ${props => props.theme['@gray-2']};
    font-size: ${props => props.theme['@font-size-sm']};
    margin: 0 ${props => props.theme['@size-xs']};
  }
`
const AuthorContainer = styled.div`
  margin-top: ${props => props.theme['@size-xl']};
  line-height: ${props => props.theme['@line-height-compressed']};
  ${media.lg} {
    display: flex;
    align-items: center;
  }
  > img {
    margin: 0 ${props => props.theme['@size-m']} ${props => props.theme['@size-s']} 0;
    ${media.lg} {
      margin-bottom: 0;
    }
    width: 86px;
  }
`

const Title: React.FC = props => <BodySmall color={'@text-color-secondary'} style={{ marginBottom: -4 }} {...props} />

export interface PostFooterProps {
  relativePath: string
  slug: string
  title: string
  gitLogLatestDate?: string
}

export const PostFooter: React.FC<PostFooterProps> = ({ relativePath, slug, gitLogLatestDate, title }) => {
  const url = `https://sammarks.me${slug}`
  return (
    <Container>
      <Row>
        <Col xs={24} md={16}>
          <Title>This was last updated {gitLogLatestDate ? `on ${gitLogLatestDate}` : 'today'}</Title>
          <LinkGroup>
            <a href={`https://mobile.twitter.com/search?q=${encodeURIComponent(url)}`} target={'_blank'}>
              Discuss this Post
            </a>
            <span>or</span>
            <a href={`https://github.com/sammarks/website/edit/master/src/content/${relativePath}`} target={'_blank'}>
              Suggest Changes on Github
            </a>
          </LinkGroup>
        </Col>
        <Col xs={24} md={8}>
          <RightContainer>
            <Title>Share this Article</Title>
            <LinkGroup>
              <TwitterShareButton url={url} title={title} via={'therealsammarks'}>
                Twitter
              </TwitterShareButton>
              <span>or</span>
              <FacebookShareButton url={url} quote={title}>
                Facebook
              </FacebookShareButton>
            </LinkGroup>
          </RightContainer>
        </Col>
      </Row>
      <AuthorContainer>
        <img src={profileRoundLarge} alt={'Sam Marks'} />
        <Body>
          <strong>Sam Marks</strong> is a developer, designer, and entrepreneur. He’s worked on several teams (and started a few!), helping
          to bring ideas to life through code and pixels. He lives with his fiancé in Kentucky.
        </Body>
      </AuthorContainer>
    </Container>
  )
}
