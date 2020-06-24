import React from "react";
import Base from "../../components/Base";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  color: rgb(250, 250, 250);
`;

const Name = styled.span`
  font-size: 24px;
`;

const About = () => {
  return (
    <Base>
      <Container>
        <p>
          My name is <Name>Chris Sanchez</Name> and I am a Full Stack Developer
          from Portland, Oregon.
        </p>
        <p>
          I am drawn to Full Stack Development because I love digging into both
          the backend architecture of an app as well as the frontend user
          interface and experience. I work with JavaScript ES6, React, Ruby on
          Rails, PostgreSQL, GraphQL, and Apollo daily. I am an agile learner,
          quick to adapt, and endlessly curious and engaged with learning and
          growing.
        </p>
      </Container>
    </Base>
  );
};

export default About;
