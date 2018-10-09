import React from 'react'
import { HeaderWrapper, Logo, LogoLink, Nav, LoginButton, JoinButton } from './header.styles'

const Header = ({ siteTitle }) => (
    <HeaderWrapper role="banner">
        <Logo>
            <LogoLink href="/">
                <span className="u-vis-hide">{siteTitle}</span>
            </LogoLink>
        </Logo>
        <Nav>
            <ul>
                <li>
                    <LoginButton
                        href="https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2FFront-End-Web-Developers-Perth%2Fjoin%2F%3FeventId%3D%26a%3D%26gj%3D"
                        title="Login"
                    >
                        Login
                    </LoginButton>
                </li>
                <li>
                    <JoinButton
                        href="https://secure.meetup.com/register/?urlkey=&eventId=&a=&number=&gj=&c=15909272&returnUri=https%3A%2F%2Fwww.meetup.com%2FFront-End-Web-Developers-Perth%2Fjoin%2F%3FeventId%3D%26a%3D%26gj%3D"
                        title="Join the Club!"
                    >
                        Join<span> the Club!</span>
                    </JoinButton>
                </li>
            </ul>
        </Nav>
    </HeaderWrapper>
)

export default Header
