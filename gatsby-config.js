const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Ben Weier',
    siteUrl: 'https://benweier.dev',
    description:
      'Brisbane-based Developer specialising in React, Redux, Gatsby, and Node',
    authorName: 'Ben Weier',
    authorTitle: 'Developer',
    social: [
      {
        name: 'Github',
        url: 'https://github.com/benweier',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/benweier',
      },
      {
        name: 'Email',
        url: 'mailto:web@benweier.dev',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 85,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ben Weier',
        short_name: 'Ben Weier',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#09e',
        display: 'standalone',
        icon: path.join(__dirname, 'src', 'assets', 'images', 'favicon.png'),
        legacy: false,
        theme_color_in_head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
  ],
}
