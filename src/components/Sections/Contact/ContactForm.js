import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import Send from "./send.inline.svg";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqllbqw");

  if (state.succeeded) {
    return (
      <p>
        Your message has been received and I will try to get back to you within
        one business day. I look forward to speaking soon.
      </p>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="example@email.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Label htmlFor="message">Message</Label>
      <TextArea
        id="message"
        name="message"
        placeholder="Hi, Jason..."
        cols="10"
        rows="5"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Send
        <Send />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  max-width: 105ch;
  display: grid;
  padding: 2em;
  background-color: var(--color-white-900);
  border-radius: var(--border-radius);
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 400;
  color: black;
`;

const Input = styled.input`
  max-width: 40ch;
  min-height: 3em;
  padding: 0.25em 0.5em;
  border: 1px solid var(--color-black-900);
  border-radius: var(--border-radius);
  margin-bottom: 2em;
  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 300;
  color: var(--color-black-900);
`;

const TextArea = styled.textarea`
  max-width: 80ch;
  min-height: 3em;
  padding: 0.25em 0.5em;
  border: 1px solid var(--color-black-900);
  border-radius: var(--border-radius);
  resize: vertical;
  margin-bottom: 2em;
  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 300;
  color: var(--color-black-900);
`;

const Button = styled(Styled.TextButton)`
  justify-self: end;
  background-color: ${({ theme }) => theme.color.primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export default ContactForm;
