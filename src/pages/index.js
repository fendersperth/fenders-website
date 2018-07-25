import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Events from '../components/Events'

export default () => (
    <Layout>
        <Hero />
        <div className="cta">
            <h3>Join the fun with our upcoming events</h3>
        </div>
        <Events />
        <Footer />
    </Layout>
)
