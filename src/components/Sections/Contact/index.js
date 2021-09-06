import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const Contact = () => (
  <Wrapper>
    <Title id="contact">Contact Me</Title>

    <Container>
      <ContactHeader />
      <ContactForm />
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  margin-bottom: 8em;
`;

const Title = styled.h2`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-3);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--color-white-900);
  margin-bottom: 2em;
`;

const Container = styled.div`
  display: grid;
  gap: 2em;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: var(--border-radius);

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-auto-flow: column;
  }
`;

export default Contact;
