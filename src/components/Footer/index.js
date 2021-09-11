import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import ContactForm from "./ContactForm";
import Profile from "./Profile";

const Footer = () => (
  <Section>
    <Styled.Container>
      <H2 id="contact">Let&apos;s Chat</H2>
      <SubHeading>Currently available for work opportunies.</SubHeading>
      <TwoColumnContainer>
        <Profile />
        <ContactForm />
      </TwoColumnContainer>
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

const SubHeading = styled(Styled.BodyTextLarge)`
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-light);
  color: var(--color-white-900);
  margin-bottom: 2em;
`;

const TwoColumnContainer = styled(Styled.TwoColumnContainer)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: auto 1fr;
  }
`;

export default Footer;
