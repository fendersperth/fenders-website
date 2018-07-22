import React from 'react'

// import '../assets/css/fenders-styles.css'
import Layout from '../components/layout'
import { Footer } from '../components/Footer'
import { Events } from '../components/Events'

export default () => (
    <Layout>
        <div className="hero">
            <h2>
                Front End Developers &amp; Designers with <span>.class</span>
            </h2>
        </div>

        <div className="cta">
            <h3>Join the fun with our upcoming events</h3>
        </div>
        <Events />
        <Footer />
    </Layout>
)
