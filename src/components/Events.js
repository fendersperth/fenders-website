import React from "react"

export const Events = () => (
    <section className="event-list clearfix">

        <div className="wrapper">

            <article  className="active">
                <a href="https://www.meetup.com/Front-End-Web-Developers-Perth/events/245870684/" title="Fenders January">
                    <span className="tag talk icon">Talks</span>
                    <strong>Fenders January Presentations</strong>
                    <span className="date">Thursday, January 18</span>
                </a>
            </article>

            <article>
                <span className="month">February</span>
                <a href="https://www.meetup.com/Front-End-Web-Developers-Perth/events/246257106//" title="Workshop">
                    <span className="tag workshop icon">Workshop</span>
                    <strong>Global Diversity CFP Day</strong>
                    <span className="date">Saturday, February 3</span>
                </a>
            </article>

            <article>
                <a href="https://www.meetup.com/Front-End-Web-Developers-Perth/events/qqvhjkyxdbsb/" title="Casual Catchup">
                    <span className="tag social icon">Social</span>
                    <strong>Casual Catchup</strong>
                    <span className="date">Wednesday, February 14</span>
                </a>
            </article>
        </div>
    </section>

)
