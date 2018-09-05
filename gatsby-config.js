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
