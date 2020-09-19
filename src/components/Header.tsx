import React from 'react'
import { Link } from 'gatsby'
import { styled, media } from '@thesisedu/web/dist'
// @ts-ignore cannot find asset file
import profileRoundSmall from '../images/profile-round-small.png'

const Container = styled.div<{ dark?: boolean; leftContent?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${props => (props.leftContent ? '50px' : '42px')} 0;
  ${media.lg} {
    flex-direction: row;
  }
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
  ${media.lg} {
    margin-right: ${props => props.theme['@size-m']};
  }
`
const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.theme['@size-s']} 0 0 0;
  ${media.lg} {
    margin: 0 0 0 auto;
  }
`
const NavigationItem = styled(Link)`
  display: block;
  &:not(:last-child) {
    margin-right: ${props => props.theme['@size-m']};
  }
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
    <NavigationContainer>
      <NavigationItem to={'/'}>Home</NavigationItem>
      <NavigationItem to={'/posts'}>Posts</NavigationItem>
      <NavigationItem to={'/contact'}>Contact</NavigationItem>
    </NavigationContainer>
  </Container>
)
