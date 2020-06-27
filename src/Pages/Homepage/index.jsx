import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
import Base from "../../components/Base";
import FlexContainer from "../../atoms/FlexContainer";
import portrait from "./../../assets/images/portrait.jpg";

const ImageColumn = styled(Col)`
  width: 100%;
`;

const PortraitImage = styled.img`
  border-radius: 50%;
  width: 190px;
  height: 190px;
  object-fit: cover;
  object-position: 100% -40px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-left: 12px;
  line-height: 7;

  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 40px;
    margin-bottom: 20px;
    line-height: initial;
    font-size: 20px;
  }
`;

const Detail = styled.p`
  margin-bottom: 0px;
  text-align: center;
`;

const Container = styled.div`
  width: 80%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Name = styled.span`
  font-size: 20px;
`;

const Homepage = () => {
  return (
    <Base>
      <FlexContainer>
        <Row display="flex" justify="center">
          <Col span={18}>
            <Row>
              <ImageColumn lg={4} sm={24} md={24}>
                <FlexContainer>
                  <PortraitImage
                    src={portrait}
                    alt="Portait of Chris Sanchez"
                  />
                </FlexContainer>
              </ImageColumn>
              <Col lg={16} sm={24} md={24}>
                <Title>Chris Sanchez | Full Stack Developer</Title>
              </Col>
              <Col lg={20} sm={24} md={24}>
                <Container>
                  <p>
                    My name is <Name>Chris Sanchez</Name> and I am a Full Stack
                    Developer from Portland, Oregon. I am drawn to Full Stack
                    Development because I love digging into both the backend
                    architecture of an app as well as the frontend user
                    interface and experience. I work with JavaScript ES6, React,
                    Ruby on Rails, PostgreSQL, GraphQL, and Apollo daily. I am
                    an agile learner, quick to adapt, and endlessly curious and
                    engaged with learning and growing.
                  </p>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </FlexContainer>
    </Base>
  );
};

export default Homepage;
