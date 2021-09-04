import React from "react";
import styled from "styled-components";
import H2 from "../../Headers/H2";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const Container = styled.div`
  background-color: white;
  border-radius: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;

    align-items: center;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
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
