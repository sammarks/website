import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// @ts-ignore cannot find asset file
import { responsiveMap } from 'antd/lib/_util/responsiveObserve'
import profileRoundSmall from '../images/profile-round-small.png'

const Container = styled.div<{ dark?: boolean; leftContent?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.leftContent ? '50px' : '42px')} 0;
  a {
    color: ${props => props.theme[props.dark ? '@text-color-secondary' : '@text-color']};
    &[aria-current] {
      font-weight: 600;
      color: ${props => props.theme[props.dark ? '@text-color-dark' : '@primary-color']};
    }
    &:hover {
      color: ${props => props.theme[props.dark ? '@text-color-dark' : '@primary-color']};
    }
  }
`
const Left = styled.div`
  margin-right: auto;
`
const NavigationItem = styled(Link)`
  display: block;
  margin-left: ${props => props.theme['@size-m']};
`
const LeftImage = styled.div`
  display: flex;
  align-items: center;
  > img {
    margin-right: ${props => props.theme['@size-s']};
    height: ${props => props.theme['@size-xl']};
  }
  > span {
    color: ${props => props.theme['@text-color']};
    font-size: 24px;
    font-weight: 600;
  }
`

export interface HeaderProps {
  leftContent?: React.ReactElement
  dark?: boolean
}
export const Header: React.FC<HeaderProps> = ({ leftContent, dark }) => (
  <Container dark={dark} leftContent={!!leftContent}>
    <Left>
      {leftContent || (
        <Link to={'/'}>
          <LeftImage>
            <img src={profileRoundSmall} alt={'Sam Marks'} width={48} />
            <span>Sam Marks</span>
          </LeftImage>
        </Link>
      )}
    </Left>
    <NavigationItem to={'/'}>Home</NavigationItem>
    <NavigationItem to={'/posts'}>Posts</NavigationItem>
    <NavigationItem to={'/contact'}>Contact</NavigationItem>
  </Container>
)
