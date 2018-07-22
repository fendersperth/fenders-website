import React from 'react'

export const Header = ({ siteTitle }) => (
    <header className="clearfix" role="banner">
        <h1>
            <a className="logo" href="/">
                <span>{siteTitle}</span>
            </a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a
                        className="btn naked"
                        href="https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2FFront-End-Web-Developers-Perth%2Fjoin%2F%3FeventId%3D%26a%3D%26gj%3D"
                        title="Login"
                    >
                        Login
                    </a>
                </li>
                <li>
                    <a
                        className="btn outline"
                        href="https://secure.meetup.com/register/?urlkey=&eventId=&a=&number=&gj=&c=15909272&returnUri=https%3A%2F%2Fwww.meetup.com%2FFront-End-Web-Developers-Perth%2Fjoin%2F%3FeventId%3D%26a%3D%26gj%3D"
                        title="Join the Club!"
                    >
                        Join<span> the Club!</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
)
