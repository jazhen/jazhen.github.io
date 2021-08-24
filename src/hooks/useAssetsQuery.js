import { graphql, useStaticQuery } from "gatsby";

const useAssetsQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const assets = {};

  for (const file of data.allFile.edges) {
    assets[file.node.name] = file.node.publicURL;
  }

  return assets;
};

export default useAssetsQuery;
