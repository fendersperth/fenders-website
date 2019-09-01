import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { EventTag, EventTitle, EventDate, EventCardLink, EventCardWrapper, Month } from './eventCard.styles'

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
