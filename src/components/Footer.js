import React from 'react'
import styled from 'react-emotion'
import { BREAKPOINTS } from '../constants'
import MonoLogo from '../assets/img/logo-mono.svg'
import SlackLogo from '../assets/img/slack.svg'
import TwitterLogo from '../assets/img/twitter.svg'

const Footer = () => (
    <FooterWrapper role="contentinfo">
        <Container>
            <FooterLogo className="logo" href="" title="Fenders">
                <span className="u-vis-hide">Fenders</span>
            </FooterLogo>

            <FooterNav>
                <ul>
                    <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScb2iYr65ZXUEDVkKP3uhbItojPKzHTOaBckjKUWrQoNLqSaA/viewform"
                            title="Submit a talk"
                        >
                            Submit a talk
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:fendersperth@gmail.com?Subject=Sponsorship"
                            title="Sponsorship"
                        >
                            Sponsorship
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:fendersperth@gmail.com?Subject=Enquiry"
                            title="Email us"
                        >
                            Email us
                        </a>
                    </li>
                </ul>
            </FooterNav>

            <SocialNav>
                <ul>
                    <li>
                        <TwitterLink
                            href="https://twitter.com/fendersperth"
                            title="Twitter"
                        >
                            <span className="u-vis-hide">Twitter</span>
                        </TwitterLink>
                    </li>
                    <li>
                        <SlackLink
                            className="slack"
                            href="https://fendersslack.herokuapp.com/"
                            title="Slack"
                        >
                            <span className="u-vis-hide">Slack</span>
                        </SlackLink>
                    </li>
                </ul>
            </SocialNav>
        </Container>
    </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
    margin-top: 70px;
    border-top: 1px solid #7f65ae;
    padding: 25px 0;
`

const Container = styled.div`
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

const Nav = styled.nav`
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

const FooterNav = styled(Nav)`
    flex: 1;
`

const LogoLink = styled.a`
    display: block;
    transition: opacity 0.1s;

    :hover,
    :active {
        opacity: 0.7;
    }
`

const FooterLogo = styled(LogoLink)`
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

const SocialNav = styled(Nav)`
    margin-top: 2rem;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin-top: 0;
    }
`

const TwitterLink = styled(LogoLink)`
    width: 26px;
    height: 26px;
    background: url(${TwitterLogo}) no-repeat;
`

const SlackLink = styled(LogoLink)`
    width: 28px;
    height: 26px;
    background: url(${SlackLogo}) no-repeat;
`
