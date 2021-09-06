import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Socials />
      <Styled.BodyText>&copy; {currentYear} Jason Zhen</Styled.BodyText>
    </Container>
  );
};

const Container = styled.section`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 4em 0;
  gap: 2em;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
`;

export default Footer;
