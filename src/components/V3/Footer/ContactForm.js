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
  font-weight: 400;
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
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-black-900);

  &::placeholder {
    font-weight: 300;
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
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-black-900);
  margin-bottom: 2em;

  &::placeholder {
    font-weight: 300;
  }
`;

const Error = styled(ValidationError)`
  color: red;
  margin-bottom: 1em;
`;

const Button = styled(Styled.TextButton)`
  align-self: start;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondaryText};
  }

  &:disabled {
    cursor: default;
    background-color: #cccccc;
    color: #888888;
  }
`;

export default ContactForm;
