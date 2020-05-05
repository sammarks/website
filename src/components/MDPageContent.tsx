import styled from 'styled-components'
import { media } from '@sammarks/web'

export const MDPageContent = styled.div`
  p {
    margin-bottom: ${props => props.theme['@size-m']};
  }
  .custom-block.block-info,
  .custom-block.block-warning,
  .custom-block.block-success,
  .custom-block.block-point,
  .custom-block.block-github {
    border-radius: ${props => props.theme['@border-radius-base']};
    padding: ${props => props.theme['@padding-sm']};
    margin: ${props => props.theme['@size-ml']} 0;
    line-height: ${props => props.theme['@line-height-compressed']};
    &:first-child {
      margin-top: 0;
    }
    ${media.lg} {
      padding: ${props => props.theme['@padding-lg']};
    }
    > .custom-block-heading {
      font-weight: 600;
      font-size: ${props => props.theme['@size-xm']};
      margin-bottom: ${props => props.theme['@size-xs']};
      line-height: ${props => props.theme['@line-height-compressed']};
    }
    > .custom-block-body *:last-child {
      margin-bottom: -${props => props.theme['@size-xxs']};
    }
  }
  .custom-block.block-info {
    background: ${props => props.theme['@blue-light']};
    color: ${props => props.theme['@blue']};
  }
  .custom-block.block-warning {
    background: ${props => props.theme['@orange-light']};
    color: ${props => props.theme['@orange']};
  }
  .custom-block.block-success {
    background: ${props => props.theme['@green-light']};
    color: ${props => props.theme['@green']};
  }
  .custom-block.block-point {
    background: ${props => props.theme['@red-light']};
    color: ${props => props.theme['@red']};
  }
`