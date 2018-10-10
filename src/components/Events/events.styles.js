import styled from 'react-emotion'
import { EventCardLink } from '../EventCard'
import { BREAKPOINTS } from '../../constants'

export const EventsWrapper = styled.section`
    label: events-wrapper;
    margin: 20px 0;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin: 55px 0;
    }
`

export const Content = styled.div`
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
`