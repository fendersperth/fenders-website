import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { BREAKPOINTS, COLOURS } from '../constants'
import Icon, { IconWrapper } from './Icon'

const EventCard = ({ active = false, month, url, title, date, type }) => {
    const cardContent = (
        <>
            <EventTag>
                <Icon name={`${type.toLowerCase()}`} />
                {type}
            </EventTag>
            <EventTitle>{title}</EventTitle>
            <EventDate>{date || 'TBA'}</EventDate>
        </>
    )

    return (
        <EventCardLink href={url}>
            <EventCardWrapper isActive={active}>
                {month && <Month>{month}</Month>}
                {cardContent}
            </EventCardWrapper>
        </EventCardLink>
    )
}

EventCard.propTypes = {
    type: PropTypes.oneOf(['social', 'workshop', 'talk']).isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string,
    active: PropTypes.bool,
    month: PropTypes.string,
}

export default EventCard

// styles

export const EventCardLink = styled.a``

const EventCardWrapper = styled.article`
    label: event-card-wrapper;
    color: ${p => {
        if (p.isActive) return '#000'
        return '#fff'
    }};
	position: relative;
	padding: 15px 15px 30px;
    background: ${p => {
        if (p.isPast) return COLOURS.PURPLE_MEDIUM
        if (p.isActive) return '#fff'

        return 'none'
    }};
	border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${COLOURS.PURPLE_LIGHT};
    border-color: ${p => {
        if (p.isPast) return COLOURS.PURPLE_LIGHT
        if (p.isActive) return '#fff'

        return `${COLOURS.PURPLE_LIGHT}`
    }};
    min-height: 160px;
	transition: background 0.4s ease-in-out;

    
    :hover,
    :focus {
        border-color: ${p => p.isActive ? '#fff' : COLOURS.PURPLE_MEDIUM};
        background: ${p => p.isActive ? '#fff' : '#866fae'};
    }

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        min-height: 190px;
    }

    a {
        color: ${p => p.isActive ? '#000' : '#fff'};
    }
`

const Month = styled.div`
    label: month-label;
    position: absolute;
    display: none;
    opacity: 0.8;
    top: -30px;
    left: 0;
    color: #fff;
    font-weight: 600;
    font-size: 13px;
    font-size: 1.3rem;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        display: block;
    }
`

const EventTag = styled.div`
    label: event-tag;
    position: relative;
    font-weight: 700;
    font-size: 13px;
    font-size: 1.3rem;
    text-transform: capitalize;

    ${IconWrapper} {
        margin-right: 6px;
    }
`

const EventTitle = styled.div`
    font-weight: 700;
    margin-top: 15px;
    line-height: 1.2;
`

const EventDate = styled.div`
    position: absolute;
    bottom: 10px;
    opacity: 0.7;
    font-size: 13px;
    font-size: 1.3rem;
`
