const fetch = require('node-fetch')

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    createTypes(`
        type Event implements Node {
            id: String
            name: String
            link: String
            local_date: Date @dateformat
            }
    `)
}

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest, reporter },
    { apiURL }
) => {
    const { createNode } = actions

    if (!apiURL) {
        reporter.panic('Please define an apiURL param to gatsby-source-meetup')
    }

    try {
        const res = await fetch(apiURL)
        const data = await res.json()

        data.forEach(event => {
            createNode({
                ...event,
                id: createNodeId(event.id),
                parent: null,
                children: [],
                internal: {
                    type: 'Event',
                    content: JSON.stringify(event),
                    contentDigest: createContentDigest(event),
                },
            })
        })
    } catch (err) {
        reporter.panicOnBuild('Error creating Meetup events.')
    }
}
