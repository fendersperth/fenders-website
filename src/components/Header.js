import React from 'react'
import styled from 'react-emotion';
import LogoImage from '../assets/img/logo.svg';
import { NakedButton, OutlinedButton } from './Button';
import { BREAKPOINTS } from '../variables';

const Header = ({ siteTitle }) => (
    <HeaderWrapper role="banner">
        <Logo>
            <LogoLink href="/">
                <SiteTitle>{siteTitle}</SiteTitle>
            </LogoLink>
        </Logo>
        <Nav>
            <ul>
                <li>
                    <NakedButton
                        href="https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2FFront-End-Web-Developers-Perth%2Fjoin%2F%3FeventId%3D%26a%3D%26gj%3D"
                        title="Login"
                    >
                        Login
                    </NakedButton>
                </li>
                <li>
                    <OutlinedButton
                        href="https://secure.meetup.com/register/?urlkey=&eventId=&a=&number=&gj=&c=15909272&returnUri=https%3A%2F%2Fwww.meetup.com%2FFront-End-Web-Developers-Perth%2Fjoin%2F%3FeventId%3D%26a%3D%26gj%3D"
                        title="Join the Club!"
                    >
                        Join<span> the Club!</span>
                    </OutlinedButton>
                </li>
            </ul>
        </Nav>
    </HeaderWrapper>
)

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    padding: 24px 35px;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        height: 160px;
    }
`;

const Logo = styled.h1`
    flex: 1;
`;

const LogoLink = styled.a`
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
`;

const SiteTitle = styled.span`
    position: absolute;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    height: 1px;
    border: 0;
    clip: rect(0 0 0 0);
`;

const Nav = styled.nav`
    float: right;

    li {
        display: inline;
    }
`;

const NavButton = styled.a`
    margin: 0 10px;
`;
