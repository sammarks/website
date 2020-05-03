import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Block } from '@sammarks/web'
import { Button } from 'antd'
import { AllPostsQuery } from '../graphqlTypes'
import { Post } from './Post'

const allPostsQuery = graphql`
  fragment Post on File {
    id
    childMarkdownRemark {
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        summary
      }
    }
  }

  query allPosts {
    content: allFile(
      filter: { sourceInstanceName: { eq: "content" }, relativeDirectory: { glob: "posts**" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...Post
        }
      }
    }
  }
`

export interface PostListProps {
  limit?: number
  allowExpand?: boolean
}
export const PostList: React.FC<PostListProps> = ({ limit = 10, allowExpand = true }) => {
  const allPosts = useStaticQuery<AllPostsQuery>(allPostsQuery)
  const [currentLimit, setCurrentLimit] = useState(limit)
  const limitedPosts = allPosts.content.edges.map(edge => edge.node).slice(0, currentLimit)

  return (
    <>
      {limitedPosts.map(post => (
        <Post fragment={post} />
      ))}
      {allowExpand && currentLimit !== Infinity ? (
        <Block marginTop={'@size-xl'}>
          <Button type={'link'} onClick={() => setCurrentLimit(Infinity)}>
            View all posts &rarr;
          </Button>
        </Block>
      ) : null}
    </>
  )
}
