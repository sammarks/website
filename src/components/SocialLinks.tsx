import React from 'react'
import { styled } from '@thesisedu/web/dist'
import GithubOutlined from '@ant-design/icons/lib/icons/GithubOutlined'
import TwitterOutlined from '@ant-design/icons/lib/icons/TwitterOutlined'
import LinkedinFilled from '@ant-design/icons/lib/icons/LinkedinFilled'
import { MastodonIcon } from './MastodonIcon'

const Container = styled.div`
  font-size: ${props => props.theme['@size-m']};
  display: flex;
  align-items: center;
  > a {
    color: ${props => props.theme['@text-color-secondary']};
  }
  > a:not(:last-child) {
    margin-right: ${props => props.theme['@size-s']};
  }
`

export const SocialLinks: React.FC = () => (
  <Container>
    <a href={'https://github.com/sammarks'} target={'_blank'} title={'Github'} rel={'noopener'}>
      <GithubOutlined />
    </a>
    <a href={'https://twitter.com/therealsammarks'} target={'_blank'} title={'Twitter'} rel={'noopener'}>
      <TwitterOutlined />
    </a>
    <a href={'https://mastodon.social/@smarks'} target={'_blank'} rel={'me'} title={'Mastodon'}>
      <MastodonIcon />
    </a>
    <a href={'https://www.linkedin.com/in/samuel-marks-9b975b4b/'} target={'_blank'} title={'LinkedIn'} rel={'noopener'}>
      <LinkedinFilled />
    </a>
  </Container>
)
