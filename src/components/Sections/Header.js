import React from "react";
import styled from "styled-components";
import A from "../Base/A";
import LinkButton from "../Buttons/LinkButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;

const NavList = styled.ul`
  display: flex;
`;

const Header = () => (
  <Nav>
    <A src="#">🥶&nbsp;Jason&nbsp;Zhen</A>
    <NavList>
      <LinkButton>work</LinkButton>
      <LinkButton>about</LinkButton>
      <LinkButton>contact</LinkButton>
      <LinkButton src="Personal Projects">résumé</LinkButton>
    </NavList>
  </Nav>
);

export default Header;
