import React from "react"

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Events } from '../components/Events'
import '../assets/css/fenders-styles.css'

export default () => (
        <div className="page-container">
            <div className="outer-container">
                <Header />
                <div className="hero">
                    <h2>Front End Developers &amp; Designers with <span>.class</span></h2>
                </div>

                <div className="cta">
                    <h3>Join the fun with our upcoming events</h3>
                </div>
                <Events />
                <Footer />
            </div>
        </div>
)
