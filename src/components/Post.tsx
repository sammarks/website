import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { BodyLarge, Body, BodySmall, Block } from '@sammarks/web'
import pluralize from 'pluralize'
import { PostFragment } from '../graphqlTypes'

const Container = styled.div`
  margin-bottom: ${props => props.theme['@size-l']};
  > div:first-child > p {
    transition: color 0.1s linear;
  }
  &:hover > div:first-child > p {
    color: ${props => props.theme['@primary-color']} !important;
  }
`

export interface PostProps {
  fragment: PostFragment
}
export const Post: React.FC<PostProps> = ({ fragment }) => {
  return (
    <Link to={fragment.childMarkdownRemark.fields.slug}>
      <Container>
        <Block marginBottom={'@size-xs'}>
          <BodyLarge color={'@text-color'} style={{ lineHeight: 1.3 }}>
            {fragment.childMarkdownRemark.frontmatter.title}
          </BodyLarge>
        </Block>
        <Block marginBottom={'@size-xs'}>
          <Body color={'@text-color-secondary'}>{fragment.childMarkdownRemark.frontmatter.summary}</Body>
        </Block>
        <BodySmall color={'@primary-color'}>
          Takes {pluralize('minute', fragment.childMarkdownRemark.timeToRead, true)}. Read &rarr;
        </BodySmall>
      </Container>
    </Link>
  )
}
