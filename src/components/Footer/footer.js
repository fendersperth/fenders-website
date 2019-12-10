import React from 'react'
import {
    FooterWrapper,
    Container,
    FooterLogo,
    FooterNav,
    SocialNav,
    TwitterLink,
    SlackLink,
} from './footer.styles'

const Footer = () => (
    <FooterWrapper role="contentinfo">
        <Container>
            <FooterLogo className="logo" href="/" title="Fenders">
                <span className="u-vis-hide">Fenders</span>
            </FooterLogo>

            <FooterNav>
                <ul>
                    <li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScb2iYr65ZXUEDVkKP3uhbItojPKzHTOaBckjKUWrQoNLqSaA/viewform">
                            Submit a talk
                        </a>
                    </li>
                    <li>
                        <a href="mailto:fendersperth@gmail.com?Subject=Sponsorship">
                            Sponsorship
                        </a>
                    </li>
                    <li>
                        <a href="mailto:fendersperth@gmail.com?Subject=Enquiry">
                            Email us
                        </a>
                    </li>
                    <li>
                        <a href="/code-of-conduct">Code of conduct</a>
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
