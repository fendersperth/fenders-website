import styled from '@emotion/styled'
import { BREAKPOINTS, COLOURS } from '../../constants'

export const HeroWrapper = styled.div`
    position: relative;
    height: 20vh;
    min-height: 200px;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        height: 30vh;
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
        height: 50vh;
    }
`

export const HeroText = styled.h2`
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: -0.25px;
    line-height: 1.2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    max-width: 60%;
    margin: 0 auto;
    width: 100%;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        font-size: 4rem;
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
        font-size: 5.5rem;
    }
`

export const Block = styled.span`
    display: inline-block;
    border-radius: 5px;
    border: 3px solid ${COLOURS.GREY};
    background: ${COLOURS.GREY_LIGHT};
    color: ${COLOURS.RED};
    font-style: normal;
    padding: 0 10px;
`
