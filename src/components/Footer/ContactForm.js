import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import styled from "styled-components";
import * as Styled from "../styles";
import SubmitMessage from "./SubmitMessage";
import SendIcon from "./send.inline.svg";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqllbqw");

  if (state.succeeded) {
    return <SubmitMessage />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="example@email.com"
        required
      />
      <Error prefix="Email" field="email" errors={state.errors} />
      <Label htmlFor="message">Message</Label>
      <TextArea
        id="message"
        name="message"
        placeholder="Hi, Jason..."
        rows="5"
        required
      />
      <Error prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Send
        <Styled.Icon>
          <SendIcon />
        </Styled.Icon>
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 1em;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-regular);
  color: var(--color-white-900);
`;

const Input = styled.input`
  min-width: 20ch;
  max-width: 60ch;
  min-height: 3em;
  padding: 0.25em 0.5em;
  border: none;
  margin-bottom: 2em;
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-regular);
  color: var(--color-black-900);

  &::placeholder {
    font-weight: var(--font-weight-light);
  }
`;

const TextArea = styled.textarea`
  min-width: 20ch;
  max-width: 60ch;
  min-height: 3em;
  padding: 0.25em 0.5em;
  border: none;
  resize: none;
  margin-bottom: 0.5em;
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-regular);
  color: var(--color-black-900);
  margin-bottom: 2em;

  &::placeholder {
    font-weight: var(--font-weight-light);
  }
`;

const Error = styled(ValidationError)`
  color: #b00020;
  margin-bottom: 1em;
`;

const Button = styled(Styled.TextButton)`
  align-self: start;

  &:hover,
  &:focus {
    color: var(--color-white-800);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #cccccc;
    color: #888888;
  }
`;

export default ContactForm;
