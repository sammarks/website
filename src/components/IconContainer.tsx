import React from 'react'
import InfoCircleOutlined from '@ant-design/icons/lib/icons/InfoCircleOutlined'
import ExclamationCircleOutlined from '@ant-design/icons/lib/icons/ExclamationCircleOutlined'
import CheckCircleOutlined from '@ant-design/icons/lib/icons/CheckCircleOutlined'
import { styled } from '@thesisedu/web/dist'
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  > :first-child {
    margin-right: 0.5em;
  }
`

export interface IconContainerProps {
  type: 'info' | 'warning'
}
export const IconContainer: React.FC<IconContainerProps> = ({ type, children }) => {
  let IconComponent: React.ForwardRefExoticComponent<AntdIconProps & React.RefAttributes<HTMLSpanElement>> | null = null
  if (type === 'info') {
    IconComponent = InfoCircleOutlined
  } else if (type === 'warning') {
    IconComponent = ExclamationCircleOutlined
  } else if (type === 'success') {
    IconComponent = CheckCircleOutlined
  }

  if (!IconComponent) {
    throw new Error('icon type is invalid')
  }

  return (
    <Container>
      <IconComponent />
      <span>{children}</span>
    </Container>
  )
}
