import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import GithubIcon from "../../icons/github.inline.svg";
import * as Styled from "../../styles";
import ExternalLinkIcon from "./external-link.inline.svg";

const Content = ({ header, body, technologies, websiteURL, githubURL }) => (
  <Container>
    <Header>{header}</Header>
    <Styled.BodyText>{body}</Styled.BodyText>
    <TechnologyContainer>
      {technologies.map((technology) => (
        <Technology key={technology}>{technology}</Technology>
      ))}
    </TechnologyContainer>
    <LinksContainer>
      <Styled.TextLink
        href={githubURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        code
      </Styled.TextLink>
      <Styled.TextLink
        href={websiteURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLinkIcon />
        demo
      </Styled.TextLink>
    </LinksContainer>
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  padding: 2em;
  gap: 2em;
`;

const Header = styled.h2`
  font-family: var(--font-family-primary);
  font-size: var(--font-size-2);
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.primaryText};
`;

const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

const Technology = styled.span`
  padding: 0.375em 0.75em;
  border-radius: var(border-radius);
  background-color: #2d3748;
  font-family: var(--font-family-primary);
  font-size: var(--font-size--1);
  font-weight: 400};
  color: ${({ theme }) => theme.color.secondaryText};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2em;
  justify-self: end;
`;

Content.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  websiteURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
};

export default Content;
