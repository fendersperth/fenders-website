import React from 'react'
import styled from 'react-emotion';

// issue with escaped string sequences in js
// https://github.com/styled-components/styled-components/issues/1285
const Icons = [
  { name: 'social', content: '\\e004', colour: '#ffcb20' },
  { name: 'workshop', content: '\\e002', colour: '#01d08a' },
  { name: 'talk', content: '\\e005', colour: '#fc5b7d' },
  { name: 'hack', content: '\\e003', colour: '#4990e2' },
]

const getIconProp = (name, prop) => {
  const icon = Icons.find(x => x.name === name);
  if (icon != null && icon.hasOwnProperty(prop)) return icon[prop];
}

export const IconWrapper = styled.i`
  label: icon;
  display: inline-block;
  font-size: 1.2rem;
  height: 14px;
  width: 14px;

  :before {
    -webkit-font-smoothing: antialiased;
    color: ${p => getIconProp(p.name, 'colour')};
    content: ${p => `'${getIconProp(p.name, 'content')}'`}; /* needs the quotes around the string seq */
    font-family: Icons;
    font-style: normal;
  }
`;

const Icon = ({ name }) => (
  <IconWrapper name={name} />
)

export default Icon;