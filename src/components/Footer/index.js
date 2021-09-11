import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import ContactForm from "./ContactForm";
import Profile from "./Profile";

const Footer = () => (
  <Section>
    <Container>
      <H1 id="contact">Let&apos;s Chat</H1>
      <H3>Currently available for work opportunies.</H3>
      <Content>
        <Profile />
        <ContactForm />
      </Content>
    </Container>
  </Section>
);

const Section = styled(Styled.Section)`
  background-color: var(--color-black-900);
`;

const Container = styled.div`
  max-width: var(--max-width);
  margin-inline: auto;
`;

const H1 = styled.h1`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-white-900);
  margin-bottom: 0.25em;
`;

const H3 = styled.h3`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-1);
  font-weight: 300;
  line-height: 1.2;
  color: var(--color-white-900);
  margin-bottom: 2em;
`;

const Content = styled.div`
  display: grid;
  gap: 4em;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
  }
`;

export default Footer;
