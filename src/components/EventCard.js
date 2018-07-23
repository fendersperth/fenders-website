import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const EventCard = ({ active, month, url, type, title, date }) => {
    const cardContent = (
        <Fragment>
            <span
                className={`tag ${type.toLowerCase()} icon`}
            >{`${type[0].toUpperCase()}${type.substr(1)}`}</span>
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
    type: PropTypes.oneOf(['social', 'workshop', 'talk']),
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    url: PropTypes.string,
    active: PropTypes.bool,
    month: PropTypes.string,
}

export default EventCard
