import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Socials />
      <Copy>&copy; {currentYear} Jason Zhen</Copy>
    </Container>
  );
};

const Container = styled.div`
  grid-area: footer;
  display: grid;
  grid-template-columns: 0 1fr 0;
  grid-template-areas:
    ". socials ."
    ". copy .";
  gap: 2em 0;
  place-items: center;
  padding: 4em 0;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
`;

const Copy = styled(Styled.BodyText)`
  grid-area: copy;
`;

export default Footer;
