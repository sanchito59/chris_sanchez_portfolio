import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  width: 100%;
  background: rgb(22, 22, 22);
  bottom: 0;
`;

// {
//   link: "mailto: c.sanch7@gmail.com",
//   icon: faEnvelope,
// },

const Footer = () => {
  return (
    <StyledFooter>
      <div>footer</div>
    </StyledFooter>
  );
};

export default Footer;
