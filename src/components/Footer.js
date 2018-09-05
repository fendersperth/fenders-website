import React from 'react'

const Footer = () => (
    <footer className="clearfix" role="contentinfo">
        <div className="container">
            <a className="logo" href="" title="Fenders">
                <span>Fenders</span>
            </a>

            <nav>
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
            </nav>

            <nav className="social">
                <ul>
                    <li>
                        <a
                            className="twitter"
                            href="https://twitter.com/fendersperth"
                            title="Twitter"
                        >
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="slack"
                            href="https://fendersslack.herokuapp.com/"
                            title="Slack"
                        >
                            <span>Slack</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
)

export default Footer
