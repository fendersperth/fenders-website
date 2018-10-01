import React from 'react'
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby'
import EventCard, { EventCardWrapper, EventCardLink } from './EventCard'
import { BREAKPOINTS } from '../constants';

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
    margin: 20px 0;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin: 55px 0;
    }
`;

const Content = styled.div`
    label: events-content;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin: 0 auto;
    padding: 0 10%;
    width: 100%;

    ${EventCardLink} {
        margin: 0 0 20px;
        flex: 1;
        
        @media (min-width: ${BREAKPOINTS.SMALL}) {
            flex: 0 0 200px;
            margin: 0 10px 50px;
        }
    }

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        align-items: center;
        flex-flow: row wrap;
        max-width: 440px;
        padding: 0;
    }

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        max-width: 660px;
    }
`;