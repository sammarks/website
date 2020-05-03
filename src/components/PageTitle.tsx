import React from 'react'
import Helmet from 'react-helmet'

export interface PageTitleProps {
  title: string
}
export const PageTitle: React.FC<PageTitleProps> = ({ title }) => <Helmet title={`${title} - Sam Marks`} />
