import React from 'react'
import GithubOutlined from '@ant-design/icons/lib/icons/GithubOutlined'
import { styled, Body, Block, BodySmall } from '@thesisedu/web/dist'

export interface RepoDetails {
  name: string
  description: string
}
const REPOS: RepoDetails[] = [
  {
    name: 'cloudformation-github-sheets-sync',
    description: 'An AWS CloudFormation template for automatically syncing Github issues to a Google Sheet.'
  },
  {
    name: 'cloudformation-scheduled-tasks',
    description: 'AWS CloudFormation template for triggering SNS-compatible AWS events at a specific time.'
  },
  {
    name: 'workflow',
    description: 'A node package for executing simple workflows with rollback support.'
  },
  {
    name: 'object-reference',
    description: 'Resolve self-referencing objects in NodeJS.'
  }
]

const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme['@text-color-secondary']};
  margin-top: ${props => props.theme['@size-xl']};
  margin-bottom: ${props => props.theme['@size-s']};
`
const HeaderRight = styled.div`
  margin-left: auto;
`
const RepoBlock = styled(Block)`
  .name {
    color: ${props => props.theme['@text-color']};
    transition: color 0.1s linear;
  }
  &:hover .name {
    color: ${props => props.theme['@primary-color']};
  }
`

export const Pushed: React.FC = () => {
  return (
    <>
      <Header>
        <Body>Here's what I've pushed:</Body>
        <HeaderRight>
          <GithubOutlined />
        </HeaderRight>
      </Header>
      {REPOS.map(repo => (
        <RepoBlock key={repo.name} marginBottom={'@size-s'}>
          <a href={`https://github.com/sammarks/${repo.name}`} target={'_blank'} rel={'noopener'}>
            <Body className={'name'}>{repo.name}</Body>
            <BodySmall color={'@text-color-secondary'}>{repo.description}</BodySmall>
          </a>
        </RepoBlock>
      ))}
      <a href={'https://github.com/sammarks'} target={'_blank'} rel={'noopener'}>
        <BodySmall>And more &rarr;</BodySmall>
      </a>
    </>
  )
}
