import styled from 'react-emotion'
import { BREAKPOINTS } from '../../constants'
import MonoLogo from '../../assets/img/logo-mono.svg'
import SlackLogo from '../../assets/img/slack.svg'
import TwitterLogo from '../../assets/img/twitter.svg'

export const FooterWrapper = styled.footer`
    margin-top: 70px;
    border-top: 1px solid #7f65ae;
    padding: 25px 0;
`

export const Container = styled.div`
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
    /* max-width: 1160px; */
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1220px;
    widht: 100%;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        flex-direction: row;
    }
`

export const Nav = styled.nav`
    li {
        display: inline-block;
        margin: 0 5px;
    }

    a {
        display: block;
        color: #fff;
        font-weight: 700;
        font-size: 1.4rem;
        transition: color 0.1s ease-in-out;
    }

    a:hover,
    a:active {
        text-decoration: underline;
        color: #fff;
    }
`

export const FooterNav = styled(Nav)`
    flex: 1;
`

export const LogoLink = styled.a`
    display: block;
    transition: opacity 0.1s;

    :hover,
    :active {
        opacity: 0.7;
    }
`

export const FooterLogo = styled(LogoLink)`
    margin-bottom: 2rem;
    display: block;
    width: calc(145px * 0.75);
    height: calc(32px * 0.75);
    background: url(${MonoLogo}) no-repeat;
    opacity: 0.5;
    margin-right: 20px;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin-bottom: 0;
    }
`

export const SocialNav = styled(Nav)`
    margin-top: 2rem;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin-top: 0;
    }
`

export const TwitterLink = styled(LogoLink)`
    width: 26px;
    height: 26px;
    background: url(${TwitterLogo}) no-repeat;
`

export const SlackLink = styled(LogoLink)`
    width: 28px;
    height: 26px;
    background: url(${SlackLogo}) no-repeat;
`
