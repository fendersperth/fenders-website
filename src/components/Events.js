import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventCard from './EventCard'

const Events = () => (
    <StaticQuery
        query={graphql`
            query EventsQuery {
                allEvent(limit: 3) {
                    edges {
                        node {
                            id
                            name
                            link
                            date: local_date(formatString: "dddd, MMMM D")
                            month: local_date(formatString: "MMMM")
                        }
                    }
                }
            }
        `}
        render={data => {
            const usedMonths = []

            return (
                <section className="event-list clearfix">
                    <div className="wrapper">
                        {data.allEvent.edges.map(({ node }, idx) => {
                            let month
                            if (!usedMonths.includes(node.month)) {
                                month = node.month
                                usedMonths.push(node.month)
                            }
                            return (
                                <EventCard
                                    active={idx === 0}
                                    url={node.link}
                                    title={node.name}
                                    key={node.id}
                                    date={node.date}
                                    month={month}
                                />
                            )
                        })}
                    </div>
                </section>
            )
        }}
    />
)

export default Events
