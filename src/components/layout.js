import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

import Header from '../components/Header'
import appleTouch from '../assets/img/apple-touch-icon.png'
import fav32 from '../assets/img/favicon-32x32.png'
import fav16 from '../assets/img/favicon-16x16.png'
import maskIcon from '../assets/img/safari-pinned-tab.svg'

import '../assets/css/fenders-styles.css'

const Layout = ({ children, data }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet title={data.site.siteMetadata.title}>
                    <html className="home" lang="en" />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href={appleTouch}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={fav32}
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={fav16}
                        sizes="16x16"
                    />
                    <link rel="manifest" href={withPrefix('/manifest.json')} />
                    <link rel="mask-icon" href={maskIcon} color="#614b87" />
                    <meta name="theme-color" content="#614b87" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Varela+Round"
                        rel="stylesheet"
                    />
                </Helmet>
                <div className="page-container">
                    <div className="outer-container">
                        <Header siteTitle={data.site.siteMetadata.title} />
                        {children}
                    </div>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
