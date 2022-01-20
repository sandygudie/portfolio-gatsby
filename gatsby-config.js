module.exports = {
  siteMetadata: {
    title: `Frontend Developer`,
    description: ` An experienced Frontend developer passionate about building interactive UI interface`,
    author: `@goodnewssandy`,
    siteUrl: `https://goodnewssandy.netlify.app/`,
    keywords: `frontend, developer,web ,software, tech,portfolio,design, interface`,
    image: `src/images/profilephotowhite.jpg`,
    themecolor: `#0e1217`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    
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
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
