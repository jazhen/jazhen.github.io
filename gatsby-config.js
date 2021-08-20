module.exports = {
  siteMetadata: {
    siteUrl: "https://jazhen.github.io",
    title: "Jason Zhen",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300, 400, 500`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
