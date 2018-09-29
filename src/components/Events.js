import React from 'react'
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby'
import EventCard from './EventCard'
import { BREAKPOINTS } from '../variables';

const determineType = name => {
    name = name.toLowerCase()

    if (name.includes('casual catchup')) {
        return 'social'
    }

    if (name.includes('workshop')) {
        return 'workshop'
    }

    return 'talk'
}

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
                <EventsWrapper>
                    <Content>
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
                                    type={determineType(node.name)}
                                />
                            )
                        })}
                    </Content>
                </EventsWrapper>
            )
        }}
    />
)

export default Events

// styles

const EventsWrapper = styled.section`
    label: events-wrapper;
    margin: 95px 0;

    @media (max-width: ${BREAKPOINTS.SMALL}) {
        margin: 55px 0;
    }
`;

const Content = styled.div`
    label: events-content;
    align-items: center;
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    max-width: 660px;
    margin: 0 auto;
    padding: 0 10%;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        grid-template-columns: auto auto;
        grid-row-gap: 5rem;
        padding: 0 2rem;
    }

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        grid-template-columns: auto auto auto;
        padding: 0;
    }
`;