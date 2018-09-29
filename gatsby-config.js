if (typeof process.env.MEETUP_API === 'undefined') {
    throw new Error('MEETUP_API env var must be defined. See README')
}

module.exports = {
    siteMetadata: {
        title: 'Fenders',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-meetup',
            options: {
                apiURL: `https://api.meetup.com/Front-End-Web-Developers-Perth/events?key=${
                    process.env.MEETUP_API
                }`,
            },
        },
    ],
}
