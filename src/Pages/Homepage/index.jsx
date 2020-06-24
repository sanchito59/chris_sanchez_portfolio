import React from "react";
import styled from "styled-components";
import Base from "../../components/Base";
import FlexContainer from "../../atoms/FlexContainer";

const Title = styled.h1`
  color: rgb(251, 247, 245);
`;

const Detail = styled.p`
  margin-bottom: 0px;
  text-align: center;
  color: rgb(251, 247, 245);
`;

const Homepage = () => {
  return (
    <Base>
      <FlexContainer>
        <Title>Chris Sanchez | Full Stack Developer</Title>
      </FlexContainer>
      <Detail>Ruby/Rails and React</Detail>
    </Base>
  );
};

export default Homepage;
