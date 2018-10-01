import React from 'react';
import styled from 'react-emotion';
import Icon, { IconWrapper } from './Icon';
import { BREAKPOINTS } from '../variables';

const CallToAction = ({ children }) => (
  <CTAWrapper>
    <Text>{children}</Text>
    <Icon name="arrow" />
  </CTAWrapper>
)

export default CallToAction;

const CTAWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${IconWrapper} {
    font-size: 8px;
    margin-top: 20px;
  }
`;

const Text = styled.h3`
  position: relative;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 1.8rem;

  @media (min-width: ${BREAKPOINTS.MEDIUM}) {
    font-size: 2.6rem;
  }
`;



// .home .cta h3:after {
//   font-size: 8px;
//   font-size: 0.8rem;
//   font-family: 'Icons';
//   display: inline-block;
//   vertical-align: middle;
//   line-height: 1;
//   font-weight: normal;
//   font-style: normal;
//   speak: none;
//   text-decoration: inherit;
//   text-transform: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   content: '\E001';
//   position: absolute;
//   left: 50%;
//   -ms-transform: translateX(-50%);
//   transform: translateX(-50%);
//   bottom: -30px;
// }