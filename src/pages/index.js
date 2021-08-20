import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Header = styled.h1`
  color: white;
`;

const IndexPage = () => (
  <Layout>
    <Header>hello world</Header>
  </Layout>
);

export default IndexPage;
