import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import styled from "styled-components";

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
      <FormFieldsContainer>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="name@gmail.com"
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
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FormFieldsContainer>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Form>
  );
};

const Form = styled.form`
  background: white;
  border: none;
  padding: 2em;
`;

const FormFieldsContainer = styled.div`
  display: grid;
`;

const Label = styled.label`
  font-size: 1.25rem;
  margin-top: 2em;
`;

const Input = styled.input`
  border-style: none none solid;
  border-color: gray;
  min-height: 3em;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  border-style: solid;
  border-color: gray;
  font-size: 1rem;

  margin-bottom: 3em;
  resize: vertical;
`;

export default ContactForm;
