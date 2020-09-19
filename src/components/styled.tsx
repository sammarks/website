import { styled, H1 } from '@thesisedu/web/dist'

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${props => props.theme['@size-s']};
`

export const ExtraLarge = styled(H1)`
  color: ${props => props.theme['@gray-2']} !important;
  font-weight: 400 !important;
  strong {
    font-weight: 600 !important;
    color: ${props => props.theme['@text-color-dark']};
  }
`
