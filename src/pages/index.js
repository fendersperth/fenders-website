import React from 'react'

import '../assets/css/fenders-styles.css'
import Layout from '../components/Layout'
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
