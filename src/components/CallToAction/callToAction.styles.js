import styled from 'react-emotion'
import { IconWrapper } from '../Icon'
import { BREAKPOINTS } from '../../constants'

export const CTAWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${IconWrapper} {
    font-size: 8px;
    margin-top: 20px;
  }
`

export const Text = styled.h3`
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
