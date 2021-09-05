import React from "react";
import styled from "styled-components";
import Socials from "./Socials";

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

const P = styled.p`
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
`;

const Copy = styled(P)`
  grid-area: copy;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Socials />
      <Copy>&copy; {currentYear} Jason Zhen</Copy>
    </Container>
  );
};

export default Footer;
