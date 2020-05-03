import React, { useState } from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { AutoComplete, Input } from 'antd'
import { PostSearchQuery } from '../graphqlTypes'

const postSearchQuery = graphql`
  query postSearch {
    content: allFile(filter: { sourceInstanceName: { eq: "content" }, relativeDirectory: { glob: "posts**" } }) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`

interface Option {
  value: string
  label: string
}
export const PostSearch: React.FC = () => {
  const data = useStaticQuery<PostSearchQuery>(postSearchQuery)
  const [options, setOptions] = useState<Option[]>([])
  const allOptions = data.content.edges.map(edge => ({
    value: edge.node.childMarkdownRemark.fields.slug,
    label: edge.node.childMarkdownRemark.frontmatter.title
  }))
  return (
    <AutoComplete
      options={options}
      onSearch={value => {
        setOptions(allOptions.filter(opt => opt.label.toLowerCase().includes(value.toLowerCase())))
      }}
      onSelect={(_, option) => {
        navigate(option.value)
      }}
      style={{ width: '100%', maxWidth: 800 }}
    >
      <Input.Search placeholder={'Find a post...'} size={'large'} />
    </AutoComplete>
  )
}
