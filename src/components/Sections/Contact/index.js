import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const Contact = () => (
  <Styled.Section>
    <Styled.SectionTitle id="contact">Contact Me</Styled.SectionTitle>

    <Container>
      <ContactHeader />
      <ContactForm />
    </Container>
  </Styled.Section>
);

const Container = styled.div`
  display: grid;
  gap: 2em;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: var(--border-radius);

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    max-width: 190ch;
  }
`;

export default Contact;
