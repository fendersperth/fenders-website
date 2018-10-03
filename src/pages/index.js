import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Events from '../components/Events'

export default () => (
    <Layout>
        <Hero />
        <CallToAction>Join the fun with our upcoming events</CallToAction>
        <Events />
        <Footer />
    </Layout>
)
