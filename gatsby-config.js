require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,

})

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

console.log(`process.env.MAILCHIMP_ENDPOINT: ${process.env.MAILCHIMP_ENDPOINT}`)

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [], // just in case those previously mentioned remark plugins sound cool :)
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/home`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT,
            },
        },
    ],
};
