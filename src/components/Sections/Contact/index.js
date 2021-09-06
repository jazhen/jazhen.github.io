import React from "react";
import styled from "styled-components";
import H2 from "../../Headers/H2";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const Container = styled.section`
  display: grid;
  gap: 2em;
  padding: 2em;
  margin-bottom: 8em;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-auto-flow: column;
    grid-template-columns: 2fr 3fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 140ch;
  }
`;

const Contact = () => (
  <>
    <H2 id="contact">Contact Me</H2>

    <Container>
      <ContactHeader />
      <ContactForm />
    </Container>
  </>
);

export default Contact;
