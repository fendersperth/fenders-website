import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventCard from './EventCard'

const Events = () => (
    <StaticQuery
        query={graphql`
            query EventsQuery {
                eventList: dataJson {
                    events {
                        id
                        active
                        type
                        title
                        date(formatString: "dddd, MMMM D")
                        month: date(formatString: "MMMM")
                        url
                    }
                }
            }
        `}
        render={data => {
            const usedMonths = []

            return (
                <section className="event-list clearfix">
                    <div className="wrapper">
                        {data.eventList.events.map(event => {
                            let month
                            if (!usedMonths.includes(event.month)) {
                                month = event.month
                                usedMonths.push(event.month)
                            }

                            return (
                                <EventCard
                                    {...event}
                                    key={event.id}
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
