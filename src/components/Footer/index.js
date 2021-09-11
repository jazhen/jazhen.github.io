import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import ContactForm from "./ContactForm";
import Profile from "./Profile";

const Footer = () => (
  <Section>
    <Styled.Container>
      <H2 id="contact">Let&apos;s Chat</H2>
      <H4>Currently available for work opportunies.</H4>
      <Content>
        <Profile />
        <ContactForm />
      </Content>
    </Styled.Container>
  </Section>
);

const Section = styled(Styled.Section)`
  background-color: var(--color-black-900);
`;

const H2 = styled(Styled.H2)`
  color: var(--color-white-900);
  margin-bottom: 0.25em;
`;

const H4 = styled.h4`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-light);
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
