import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
        <html {...this.props.htmlAttributes} className="home">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {this.props.headComponents}

                <link rel="apple-touch-icon" sizes="120x120" href="img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" href="img/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="img/favicon-16x16.png" sizes="16x16" />
                <link rel="manifest" href="img/manifest.json" />
                <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#614b87"/>
                <meta name="theme-color" content="#614b87" />
                <link rel="stylesheet" href="./static/css/fenders-styles.css" media="screen" />
                <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />

                {css}

            </head>
            <body {...this.props.bodyAttributes}>
                {this.props.preBodyComponents}
                <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
                {this.props.postBodyComponents}
            </body>
      </html>
    )
  }
}
