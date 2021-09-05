import React from "react";
import styled from "styled-components";
import ExternalLinkIcon from "./external-link.inline.svg";
import GithubIcon from "./github.inline.svg";

const Card = ({
  header,
  body,
  websiteURL,
  githubURL,
  thumbnail,
  technologies,
}) => (
  <Container>
    <Thumbnail src={thumbnail} />
    <ContentContainer>
      <Header>{header}</Header>
      <Body>{body}</Body>
      <TechnologyContainer>
        {technologies.map((technology) => (
          <Technology key={technology}>{technology}</Technology>
        ))}
      </TechnologyContainer>
      <GuthubLink href={githubURL} target="_blank" rel="noopener noreferrer">
        Github Repo
        <GithubIcon />
      </GuthubLink>
      <WebsiteLink href={websiteURL} target="_blank" rel="noopener noreferrer">
        Live Site
        <ExternalLinkIcon />
      </WebsiteLink>
    </ContentContainer>
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.paper};
`;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "body body"
    "technology technology"
    "action1 action2";
  grid-template-rows: auto 1fr auto auto;
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

const Body = styled.h3`
  grid-area: body;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.secondaryText};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    font-size: 1.125rem;
  }
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

const ContainedButton = styled.a`
  min-width: 3rem;
  padding: 1em 2em;
  margin: 0.25em 0.5em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondaryText};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  gap: 0.5em;

  place-items: center;
  place-content: center;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:hover {
    opacity: 0.92;
  }

  &:focus {
    opacity: 0.76;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.125rem;
  }
`;

const GuthubLink = styled(ContainedButton)`
  grid-area: action1;
  font-size: 0.75rem;
`;

const WebsiteLink = styled(ContainedButton)`
  grid-area: action2;
  font-size: 0.75rem;
`;

export default Card;
