import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  transition: background-color 0.7s;
  background-color: ${(props) => (props.scrolledDown ? "#00171f" : "#fdfffc;")};
`;

const LinkContainer = styled.div`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  transition: background 0.7s, color 0.7s;

  :hover {
    background-color: ${(props) =>
      props.scrolledDown ? "#fdfffc" : "#00171f"};

    a {
      color: ${(props) => (props.scrolledDown ? "#00171f" : "#fdfffc")};
    }
  }
`;

const AnchorLink = styled.a`
  color: #00171f;
  text-decoration: none;

  color: ${(props) => (props.scrolledDown ? "#fdfffc;" : "#00171f")};
`;

const EmailLink = styled.a`
  color: #00171f;
  text-decoration: none;

  color: ${(props) => (props.scrolledDown ? "#fdfffc;" : "#00171f")};
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

  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <NavbarContainer scrolledDown={scrolled}>
      <LinkContainer scrolledDown={scrolled}>
        <AnchorLink scrolledDown={scrolled} onClick={() => scrollUp()}>
          HOME
        </AnchorLink>
      </LinkContainer>
      <LinkContainer scrolledDown={scrolled}>
        <AnchorLink scrolledDown={scrolled} href="#projects">
          PORTFOLIO
        </AnchorLink>
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
