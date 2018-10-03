import React from 'react'
import styled from 'react-emotion'
import Icon, { IconWrapper } from './Icon'
import { BREAKPOINTS } from '../constants'

const CallToAction = ({ children }) => (
  <CTAWrapper>
    <Text>{children}</Text>
    <Icon name="arrow" />
  </CTAWrapper>
)

export default CallToAction

const CTAWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${IconWrapper} {
    font-size: 8px;
    margin-top: 20px;
  }
`

const Text = styled.h3`
  position: relative;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -0.2px;

  @media (min-width: ${BREAKPOINTS.MEDIUM}) {
    font-size: 2.6rem;
  }
`
