const crypto = require('crypto')
const fetch = require('node-fetch')

exports.sourceNodes = async ({ actions, createNodeId }, { apiURL }) => {
    const { createNode } = actions

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
                    type: 'event',
                    content: JSON.stringify(event),
                    contentDigest: crypto
                        .createHash('md5')
                        .update(JSON.stringify(event))
                        .digest('hex'),
                    description: 'Meetup event',
                },
            })
        })
    } catch (err) {
        throw new Error('Error creating Meetup events.')
    }
}
