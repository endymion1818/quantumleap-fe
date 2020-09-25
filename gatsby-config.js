const siteTitle = `Carraway`

module.exports = {
  siteMetadata: {
    pathPrefix: '/',
    siteTitle: siteTitle,
    siteUrl: `https://www.gatsby-starter-carraway.netlify.com`,
    siteDescription: `A starter for Gatsbyjs with typescript, jest and several ui components`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-eslint`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `page`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `image`,
    //     path: `${__dirname}/src/assets/`,
    //   },
    // },
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'someTypeName',
        fieldName: 'webinyHeadlessCms',
        url: 'https://d3gz2ruo2cbm8o.cloudfront.net/cms/read/production/cms/read/production',
        headers: {
          authorization: '5159873db3fcc0339dfe38a717a8a3fe6b93e3309351ded5',
        },
      },
    },
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: `dsn-goes-here`,
        environment: process.env.NODE_ENV,
        enabled: (() => [`production`, `stage`].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteTitle
    //             siteDescription
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map((edge) => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/feed.xml',
    //         title: `RSS feed for ${siteTitle}`,
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     exclude: [],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-lunr`,
    //   options: {
    //     languages: [
    //       {
    //         name: 'en',
    //       },
    //     ],
    //     fields: [
    //       { name: 'title', store: true, attributes: { boost: 20 } },
    //       { name: 'content' },
    //       { name: 'url', store: true },
    //     ],
    //     resolvers: {
    //       MarkdownRemark: {
    //         title: (node) => node.frontmatter.title,
    //         content: (node) => node.rawMarkdownBody,
    //         url: (node) => node.fields.slug,
    //       },
    //     },
    //   },
    // },
  ],
}
