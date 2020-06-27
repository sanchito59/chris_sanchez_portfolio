import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  font-family: "Oswald", sans-serif;
  letter-spacing: 3.5px;
  width: 100%;
  height: 40px;
  line-height: 2.5;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${(props) =>
    props.scrolledDown ? "rgb(22, 22, 22)" : "rgb(251, 247, 245);"};
`;

const LinkContainer = styled.div`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  transition: background 0.6s, color 0.7s;

  :hover {
    background-color: ${(props) =>
      props.scrolledDown ? "rgb(251, 247, 245)" : "rgb(22, 22, 22)"};

    a {
      color: ${(props) =>
        props.scrolledDown ? "rgb(22, 22, 22)" : "rgb(251, 247, 245)"};
    }
  }
`;

const Navlink = styled(Link)`
  color: rgb(22, 22, 22);
  text-decoration: none;

  color: ${(props) =>
    props.scrolledDown ? "rgb(251, 247, 245);" : "rgb(22, 22, 22)"};
`;

const EmailLink = styled.a`
  color: rgb(22, 22, 22);
  text-decoration: none;

  color: ${(props) =>
    props.scrolledDown ? "rgb(251, 247, 245);" : "rgb(22, 22, 22)"};
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrolled(e.target.documentElement.scrollTop >= 25);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <NavbarContainer scrolledDown={scrolled}>
      <LinkContainer scrolledDown={scrolled}>
        <Navlink scrolledDown={scrolled} to="/">
          HOME
        </Navlink>
      </LinkContainer>
      <LinkContainer scrolledDown={scrolled}>
        <Navlink scrolledDown={scrolled} to="/portfolio">
          PORTFOLIO
        </Navlink>
      </LinkContainer>
      <LinkContainer scrolledDown={scrolled}>
        <EmailLink href="mailto: c.sanch7@gmail.com" scrolledDown={scrolled}>
          c.sanch7@gmail.com
        </EmailLink>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
