module.exports = {
  siteMetadata: {
    title: `Frontend Developer`,
    description: ` An experienced Frontend developer passionate about building interactive UI interface`,
    author: `@goodnewssandy`,
    siteUrl: `https://goodnewssandy.netlify.app/`,
    keywords: `frontend, developer,web ,software, tech,portfolio,design, interface`,
    image: `src/images/profile-image.PNG`,
    themecolor: `#0e1217`,
  },
  plugins: [
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
        display: `minimal-ui`,
        icon: `src/images/profile-image.PNG`,
      },
    },
  ],
}
