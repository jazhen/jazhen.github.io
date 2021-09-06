import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import GithubIcon from "../../icons/github.inline.svg";
import * as Styled from "../../styles";
import ExternalLinkIcon from "./external-link.inline.svg";

const Content = ({ header, body, technologies, websiteURL, githubURL }) => (
  <Container>
    <Header>{header}</Header>
    <Body>{body}</Body>
    <TechnologyContainer>
      {technologies.map((technology) => (
        <Technology key={technology}>{technology}</Technology>
      ))}
    </TechnologyContainer>
    <GuthubLink href={githubURL} target="_blank" rel="noopener noreferrer">
      <GithubIcon />
      code
    </GuthubLink>
    <WebsiteLink href={websiteURL} target="_blank" rel="noopener noreferrer">
      <ExternalLinkIcon />
      demo
    </WebsiteLink>
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "body body"
    "technology technology"
    "action1 action2";
  grid-template-rows: auto 1fr auto auto;
  grid-template-columns: 1fr auto;
  place-items: start;
  padding: 1em;
`;

const Header = styled.h2`
  grid-area: header;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.2;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.primaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.75rem;
  }
`;

const Body = styled(Styled.BodyText)`
  grid-area: body;
  margin-bottom: 1em;
`;

const TechnologyContainer = styled.div`
  grid-area: technology;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 1em;
`;

const Technology = styled.span`
  padding: 0.25em 0.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #2d3748;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.secondaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 0.875rem;
  }
`;

const Link = styled(Styled.TextLink)`
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 0.875rem;
  }
`;

const GuthubLink = styled(Link)`
  grid-area: action1;
  justify-self: end;
`;

const WebsiteLink = styled(Link)`
  grid-area: action2;
`;

Content.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  websiteURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
};

export default Content;
