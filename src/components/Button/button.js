import React from 'react'
import { LinkButton } from './button.styles'

const Button = ({ colour = 'purple', title, href, children }) => (
  <LinkButton href={href} title={title} colour={colour}>{children}</LinkButton>
)

export default Button
