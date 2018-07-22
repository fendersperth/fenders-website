import React from 'react'
import { Link } from 'gatsby'

export const Events = () => (
    <section className="event-list clearfix">
        <div className="wrapper">
            <article className="active">
                <Link
                    to="https://www.meetup.com/Front-End-Web-Developers-Perth/events/245870684/"
                    aria-labelledby="event-01"
                >
                    <span className="tag talk icon">Talks</span>
                    <strong id="event-01">Fenders January Presentations</strong>
                    <span className="date">Thursday, January 18</span>
                </Link>
            </article>

            <article>
                <span className="month">February</span>
                <Link
                    to="https://www.meetup.com/Front-End-Web-Developers-Perth/events/246257106//"
                    aria-labelledby="event-02"
                >
                    <span className="tag workshop icon">Workshop</span>
                    <strong id="event-02">Global Diversity CFP Day</strong>
                    <span className="date">Saturday, February 3</span>
                </Link>
            </article>

            <article>
                <Link
                    to="https://www.meetup.com/Front-End-Web-Developers-Perth/events/qqvhjkyxdbsb/"
                    aria-labelledby="event-03"
                >
                    <span className="tag social icon">Social</span>
                    <strong id="event-03">Casual Catchup</strong>
                    <span className="date">Wednesday, February 14</span>
                </Link>
            </article>
        </div>
    </section>
)
