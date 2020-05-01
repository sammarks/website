import React from 'react'
import styled from 'styled-components'
import { media } from '@sammarks/web'
import GithubOutlined from '@ant-design/icons/lib/icons/GithubOutlined'

const Container = styled.div`
  background: ${props => props.theme['@background-color-base']};
  color: ${props => props.theme['@gray-5']};
  transition: background 0.1s linear, color 0.1s linear;
  &:hover {
    background: ${props => props.theme['@background-color-dark']};
    color: ${props => props.theme['@text-color-dark']};
  }
  display: flex;
  align-items: center;
  font-size: ${props => props.theme['@size-xm']} !important;
  line-height: 1 !important;
  strong {
    font-weight: 600;
  }
`
const Message = styled.div`
  display: none;
  ${media.md} {
    display: block;
  }
`
const Icon = styled.div`
  margin-right: ${props => props.theme['@size-xs']};
  font-size: ${props => props.theme['@size-m']};
`
const Right = styled.div`
  margin-left: auto;
`

export interface GithubBlockProps {
  repository: string
}
export const GithubBlock: React.FC<GithubBlockProps> = ({ repository }) => (
  <a href={`https://github.com/${repository}`} target={'_blank'}>
    <Container className={'custom-block block-github'}>
      <Icon>
        <GithubOutlined />
      </Icon>
      <Message>
        <strong>View this project on Github.</strong>
      </Message>
      <Right>{repository} &rarr;</Right>
    </Container>
  </a>
)
