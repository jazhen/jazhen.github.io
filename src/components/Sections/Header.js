import React from "react";
import styled from "styled-components";
import * as Styled from "./styles";

const Header = () => (
  <Nav>
    <Logo src="#">JASON&nbsp;ZHEN</Logo>
    <NavList>
      <Styled.A href="#projects">projects</Styled.A>
      <Styled.A href="#about">about</Styled.A>
      <Styled.A href="#contact">contact</Styled.A>
    </NavList>
  </Nav>
);

const Nav = styled.nav`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

const NavList = styled.ul`
  display: flex;
  gap: 3em;
`;

const Logo = styled(Styled.A)`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.color.primaryText};
`;

export default Header;
