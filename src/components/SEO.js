import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: site.siteMetadata.description,
        },
        {
          property: "og:title",
          content: site.siteMetadata.title,
        },
        {
          property: "og:description",
          content: site.siteMetadata.description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content:
            "https://user-images.githubusercontent.com/6326660/130699832-ae225354-1133-4488-ad96-d8322a1640e7.png",
        },
      ]}
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "https://user-images.githubusercontent.com/6326660/130699681-5d9a4e91-29d2-4703-b0b2-36d007cb2b69.png",
        },
      ]}
    />
  );
};

export default SEO;
