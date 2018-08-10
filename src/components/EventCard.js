import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const EventCard = ({ active, month, url, title, date }) => {
    const icons = ['social', 'workshop', 'talk']
    const iconClass = icons[Math.floor(Math.random() * icons.length)]

    const cardContent = (
        <Fragment>
            <span className={`tag ${iconClass} icon`} aria-hidden>
                &nbsp;
            </span>
            <strong>{title}</strong>
            <span className="date">{date || 'TBA'}</span>
        </Fragment>
    )

    return (
        <article className={active ? 'active' : null}>
            {month && <span className="month">{month}</span>}
            {url ? <a href={url}>{cardContent}</a> : cardContent}
        </article>
    )
}

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string,
    active: PropTypes.bool,
    month: PropTypes.string,
}

export default EventCard
