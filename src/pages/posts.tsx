import * as React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import IndexLayout from '../layouts'
import { Container } from '../components/styled'
import { Header } from '../components/Header'
import { PostSearch } from '../components/PostSearch'
import { PostList } from '../components/PostList'
import { PageTitle } from '../components/PageTitle'

const SearchContainer = styled.div`
  margin: ${props => props.theme['@size-xl']} auto;
  text-align: center;
`

const Posts = () => (
  <IndexLayout>
    <PageTitle title={'Posts'} />
    <Container>
      <Header />
      <Row justify={'center'}>
        <Col xs={24} lg={16}>
          <SearchContainer>
            <PostSearch />
          </SearchContainer>
          <PostList />
        </Col>
      </Row>
    </Container>
  </IndexLayout>
)

export default Posts
