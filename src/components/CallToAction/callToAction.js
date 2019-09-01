import React from 'react'
import Icon from '../Icon'
import { CTAWrapper, Text } from './callToAction.styles'

const CallToAction = ({ children }) => (
  <CTAWrapper>
    <Text>{children}</Text>
    <Icon name="arrow" />
  </CTAWrapper>
)

export default CallToAction
