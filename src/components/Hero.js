import React from 'react'
import styled from 'react-emotion';
import { BREAKPOINTS } from '../variables';

const Hero = () => (
    <HeroWrapper>
        <HeroText>
            Front End Developers &amp; Designers with <span>.class</span>
        </HeroText>
    </HeroWrapper>
)

export default Hero

// styles

const HeroWrapper = styled.div`
    position: relative;
    height: 20vh;
    min-height: 200px;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        height: 30vh;
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
        height: 50vh;
    }
`;

const HeroText = styled.h2`
    font-weight: 600;
    font-size: 2.2rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    color: #fff;
    text-align: center;
    max-width: 60%;
    margin: 0 auto;

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
        font-size: 4rem;
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
        font-size: 5.5rem;
    }

    span {
        display: inline-block;
        border-radius: 5px;
        border: 3px solid #e1e1e9;
        background: #f7f7f9;
        color: #fd597c;
        padding: 0 10px;
    }
`;