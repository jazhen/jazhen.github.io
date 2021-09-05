module.exports = {
  siteMetadata: {
    siteUrl: "https://jazhen.github.io",
    title: "Jason Zhen",
    description: "Jason Zhen's Software Engineering Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,200,300,400,500,600,700,800,900`,
          `Montserrat\:100,200,300,400,500,600,700,800,900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
