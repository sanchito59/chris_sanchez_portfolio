import React from "react";
import styled from "styled-components";
import FlexContainer from "../../atoms/FlexContainer";

const Title = styled.h1``;

const Detail = styled.p`
  margin-bottom: 0px;
  text-align: center;
`;

const Homepage = () => {
  return (
    <>
      <FlexContainer>
        <Title>Chris Sanchez | Full Stack Developer</Title>
      </FlexContainer>
      <Detail>Ruby/Rails and React</Detail>
    </>
  );
};

export default Homepage;
