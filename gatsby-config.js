module.exports = {
  siteMetadata: {
    title: "My Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "_veQ8Y7-t5c-G84bCrR1uQCCzveuF02E1hLs5ASurMg",
        spaceId: "rojykdmyjof0",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
