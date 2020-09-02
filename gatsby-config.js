require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.rafaelrozon.com',
        title: `Rafael Rozon Website`,
        description: `Personal Website of Rafael Rozon: I'm a Brazilian Software Engineer living in Vancouver, BC. I build Web Apps in React and JavaScript and share what I learn.`,
        author: `Rafael Rozon`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                serialize: ({ site, allSitePage }) => {
                    return allSitePage.edges.map(node => {
                        return {
                            url: site.siteMetadata.siteUrl,
                            changefreq: `monthly`,
                            priority: 0.7,
                        };
                    });
                },
            },
        },
        'gatsby-plugin-robots-txt',
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
                icon: `src/images/logo.png`,
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
