import React from 'react'
import { Link } from 'gatsby'

export const Events = () => (
    <section className="event-list clearfix">
        <div className="wrapper">
            <article className="active">
                <span className="month">August</span>
                <a href="https://www.meetup.com/en-AU/Front-End-Web-Developers-Perth/events/qqvhjkyxlblb/" title="August Casual Catchup">
                    <span className="tag social icon">Social</span>
                    <strong>Casual Catchup</strong>
                    <span className="date">Wednesday, August 8</span>
                </a>
            </article>

            <article>
                <span className="tag talk icon">Talks</span>
                <strong>Fenders Birthday - Lightning Talks</strong>
                <span className="date">TBA</span>
            </article>

            <article>
                <span className="month">September</span>
                <a href="https://www.meetup.com/en-AU/Front-End-Web-Developers-Perth/events/qqvhjkyxmbqb/" title="September Casual Catchup">
                    <span className="tag social icon">Social</span>
                    <strong>Casual Catchup</strong>
                    <span className="date">Wednesday, September 12</span>
                </a>
            </article>
        </div>
    </section>
)

// Event Types
// - Workshop (workshop)
// - Social (social)
// - Talks (talk)