import styled from '@emotion/styled'
import { COLOURS } from '../../constants'

const BUTTON_COLOURS = {
  solid: {
    green: { default: '#01d08a', active: '#019d68' },
    purple: { default: '#604b86', active: '#afa0ca' },
  },
  naked: {
    purple: { active: COLOURS.PURPLE_PRIMARY },
  },
  outlined: {
    purple: { default: COLOURS.PURPLE_PRIMARY, active: COLOURS.PURPLE_PRIMARY },
  },
}

const BUTTON_PADDING = {
  DEFAULT: '13px 30px',
  SMALL: '10px 15px'
}

const getButtonProp = (style = 'solid') => ({ colour = 'purple', prop = 'default' }) => {
  return BUTTON_COLOURS[style][colour][prop]
}

const getSolidButtonProp = getButtonProp('solid')
const getNakedButtonProp = getButtonProp('naked')
const getOutlinedButtonProp = getButtonProp('outlined')

export const LinkButton = styled.a`
    background-color: ${p => getSolidButtonProp({ colour: p.colour, prop: 'default' })};
    padding: ${BUTTON_PADDING.DEFAULT};
    color: white;
    text-decoration: none;
    display: inline-block;
    transition: all 0.4s ease-in-out;
    text-align: center;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.4rem;

  :hover,
  :focus {
      color: white;
      background-color: ${p => getSolidButtonProp({ colour: p.colour, prop: 'active' })};
  }

  &[disabled] {
    background-color: grey;
    opacity: 0.5;
  }
`

export const NakedButton = styled(LinkButton)`
  background-color: transparent;
  padding: ${BUTTON_PADDING.SMALL};

  :hover,
  :focus {
    background-color: ${getNakedButtonProp({ colour: 'purple', prop: 'active' })}
  }
`

export const OutlinedButton = styled(LinkButton)`
  border-width: 1px;
  border-style: solid;
  border-color: ${getOutlinedButtonProp({ colour: 'purple', prop: 'default' })};
  background-color: transparent;
  padding: ${BUTTON_PADDING.SMALL};

  :hover,
  :focus {
    background-color: ${getOutlinedButtonProp({ colour: 'purple', prop: 'active' })};
  }
`
