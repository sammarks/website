import React from 'react'
import RehypeReact from 'rehype-react'
import { H2, H3, Body, BodyLarge } from '@thesisedu/web'
import { IconContainer } from './IconContainer'
import { GithubBlock } from './GithubBlock'

export const renderAst = new RehypeReact({
  // @ts-ignore
  createElement: React.createElement,
  components: {
    h1: H2,
    h2: H3,
    h3: props => <BodyLarge isBlock {...props} />,
    p: props => <Body isBlock {...props} />,
    'icon-info': props => <IconContainer {...props} type={'info'} />,
    'icon-warning': props => <IconContainer {...props} type={'warning'} />,
    'icon-success': props => <IconContainer {...props} type={'success'} />,
    github: ({ children }) => <GithubBlock repository={children} />
  }
}).Compiler
