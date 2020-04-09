import styled from '@emotion/styled'
import LogoImage from '../../assets/img/logo.svg'
import { NakedButton, OutlinedButton } from '../Button'
import { BREAKPOINTS } from '../../constants'

export const JoinButton = styled(OutlinedButton)`
    margin-left: 20px;

    span {
        display: none;

        @media (min-width: ${BREAKPOINTS.SMALL}) {
            display: inline;
        }
    }
`

export const LoginButton = styled(NakedButton)``

export const HeaderWrapper = styled.header`
    display: flex;
    padding: 24px 35px;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        height: 160px;
    }
`

export const Logo = styled.h1`
    flex: 1;
`

export const LogoLink = styled.a`
    align-items: center;
    background-image: url(${ LogoImage});
    display: flex;
    font-size: 9.6px;
    height: 3.625em;
    width: 12.5em;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        font-size: 12px;
    }

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        font-size: 16px;
        top: 80px;
    }
`

export const Nav = styled.nav`
    float: right;

    li {
        display: inline;
    }
`
