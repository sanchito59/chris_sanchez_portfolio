import React from "react";
import styled from "styled-components";
import ReactWOW from "react-wow";
import { Col, Row } from "antd";
import Base from "../../components/Base";
import FlexContainer from "../../atoms/FlexContainer";
import portrait from "./../../assets/images/portrait.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const IconCol = styled(Col)`
  margin-top: 10px;
`;

const IconDiv = styled.div`
  width: 80px;
  height: 80px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: black;
  width: 55px !important;
  height: 55px !important;

  transition: transform 350ms;
  :hover {
    transform: translateY(-5px);
  }
`;

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
    margin-bottom: 20px;
    margin-top: 40px;
    line-height: initial;
    font-size: 20px;
  }
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
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/chris--sanchez/",
      icon: faLinkedinIn,
    },
    {
      link: "https://github.com/sanchito59",
      icon: faGithub,
    },
    {
      link: "https://twitter.com/tswasteland_bot",
      icon: faTwitter,
    },
    {
      link: "mailto: c.sanch7@gmail.com",
      icon: faEnvelope,
    },
  ];
  const IconRow = () => {
    return (
      <FlexContainer>
        <Row style={{ width: "100%" }}>
          {socialLinks.map((social) => {
            return (
              <IconCol>
                <IconDiv>
                  <a href={social.link} target="_blank">
                    <SocialIcon icon={social.icon} />
                  </a>
                </IconDiv>
              </IconCol>
            );
          })}
        </Row>
      </FlexContainer>
    );
  };

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
              <ReactWOW animation="fadeInUp">
                <Col lg={20} sm={24} md={24}>
                  <Container>
                    <p>
                      My name is <Name>Chris Sanchez</Name> and I am a Full
                      Stack Developer from Portland, Oregon. I am drawn to Full
                      Stack Development because I love digging into both the
                      backend architecture of an app as well as the frontend
                      user interface and experience. I work with JavaScript ES6,
                      React, Ruby on Rails, PostgreSQL, GraphQL, and Apollo
                      daily. I am an agile learner, quick to adapt, and
                      endlessly curious and engaged with learning and growing.
                    </p>
                  </Container>
                </Col>
                <Col lg={20} sm={24} md={24}>
                  <IconRow />
                </Col>
              </ReactWOW>
            </Row>
          </Col>
        </Row>
      </FlexContainer>
    </Base>
  );
};

export default Homepage;
