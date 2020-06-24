import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
`;

const Base = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Base;
