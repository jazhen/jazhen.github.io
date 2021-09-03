import React from "react";
import styled from "styled-components";
import A from "../Base/A";
import LinkButton from "../Buttons/LinkButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
`;

const NavList = styled.ul`
  display: flex;
`;

const Header = () => (
  <Nav>
    <A src="#">JASON&nbsp;ZHEN</A>
    <NavList>
      <LinkButton href="#projects">projects</LinkButton>
      <LinkButton href="#about">about</LinkButton>
      <LinkButton>contact</LinkButton>
      <LinkButton>résumé</LinkButton>
    </NavList>
  </Nav>
);

export default Header;
