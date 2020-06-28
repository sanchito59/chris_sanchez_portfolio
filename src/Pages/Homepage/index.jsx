import React from "react";
import styled from "styled-components";
import ReactWOW from "react-wow";
import { Col, Row } from "antd";
import Base from "../../components/Base";
import FlexContainer from "../../atoms/FlexContainer";
import SectionTitle from "../../components/SectionTitle";
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
  margin-right: 12px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: black;
  width: 55px !important;
  height: 55px !important;

  transition: transform 350ms;
  :hover {
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 600px) {
    width: 40px !important;
    height: 40px !important;
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

const ExperienceCol = styled(Col)`
  margin-top: 12px !important;
  margin-bottom: 12px !important;
`;

const MainInfoRow = styled(Row)`
  margin: 12px 0px;
  font-size: 18px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const ItalicDetailCol = styled(Col)`
  font-style: italic;
  margin: 0px 5px;
`;

const DetailCol = styled(Col)`
  margin: 0px 5px;
`;

const MainDetailCol = styled(Col)`
  font-weight: bold;
`;

const DurationRow = styled(Row)`
  margin-bottom: 8px;
`;

const ExperienceRow = styled(Row)`
  margin-left: 30px;

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
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
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

  const workExperience = [
    {
      company: "Propopen",
      location: "Portland, OR",
      title: "Full Stack Developer - Ruby/Rails, React",
      startDate: "March 2020",
      endDate: "Present",
      responsibilities: [
        "Built CRUD functionality with GraphQL/Apollo, Ruby, React, and PostgreSQL",
        "Managed milestones from initial steps through final delivery.",
        "Worked closely with Product Manager and team during agile sprints contributing to larger cycles as well as individually led cycles",
        "Gathered and defined customer requirements to develop clear specifications for creating well-organized project plans",
        "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements",
        "Merged 100+ pull requests for features such as contact management tools, Excel integration, CRM, account management, the signup / onboarding flow",
        "Built front-end application features using React.js with scale and reuse-ability such as carousels, galleries, pagination patterns, dropdowns, and forms",
        "Performed code reviews on pull requests to ensure code meets production level standards of readability, scalability, and maintainability",
      ],
    },
    {
      company: "Whole Foods Market",
      location: "Tualitan, OR",
      title: "Team Trainer",
      startDate: "August 2017",
      endDate: "November 2018",
      responsibilities: [
        "Provided management with feedback regarding employee performance and training needs.",
        "Cross-trained existing employees in order to maximize team performance.",
        "Successfully integrated new hires onto department teams by teaching company core values and specific department procedures",
        "Created training documents for future new hires and Team Trainers",
        "Demonstrated new products, procedures and techniques to employees.",
      ],
    },
  ];

  const WorkExperienceRow = () => {
    return (
      <FlexContainer>
        <Row style={{ width: "100%;" }}>
          {workExperience.map((experience) => {
            return (
              <ExperienceCol span={24}>
                <MainInfoRow style={{ width: "100%;" }}>
                  <MainDetailCol>{experience.title} </MainDetailCol>
                  <Row>
                    <ItalicDetailCol>{experience.company},</ItalicDetailCol>
                    <DetailCol>{experience.location}</DetailCol>
                  </Row>
                </MainInfoRow>
                <DurationRow style={{ width: "100%;" }}>
                  {experience.startDate} - {experience.endDate}
                </DurationRow>
                <ExperienceRow style={{ width: "100%;" }}>
                  {experience.responsibilities.map((responsibility) => {
                    return (
                      <Col span={24}>
                        <li>{responsibility}</li>
                      </Col>
                    );
                  })}
                </ExperienceRow>
              </ExperienceCol>
            );
          })}
        </Row>
      </FlexContainer>
    );
  };

  const education = [
    {
      school: "Epicodus",
      location: "Portland, OR,",
      degree: "Web Development - Ruby/Rails, React",
      startDate: "October 2019",
      endDate: "March 2020",
      experience: [
        "Completed full-time, 27-wek program in web and open-source development",
        "Build over 60 applications with JavaScript, Ruby, React, PostgreSQL",
        "Developed interpersonal and communication skills through pairing and group projects",
        "Studied Object Oriented Programming, MVC, Behavior Driven Development, Test Driven Development, UI/UX, git, and more",
      ],
    },
    {
      school: "University of Oregon",
      location: "Eugene, OR,",
      degree: "BA English Literature",
      startDate: "September 2012",
      endDate: "June 2016",
      experience: [
        "Collaborated with others to proofread and publish works of writing in local or University journals such as Oregon Voice and Unbound.",
      ],
    },
  ];

  const EducationRow = () => {
    return (
      <FlexContainer>
        <Row style={{ width: "100%;" }}>
          {education.map((educationalDetail) => {
            return (
              <ExperienceCol span={24}>
                <MainInfoRow style={{ width: "100%;" }}>
                  <MainDetailCol>{educationalDetail.school} </MainDetailCol>
                  <Row>
                    <DetailCol>{educationalDetail.location}</DetailCol>
                    <ItalicDetailCol>
                      {educationalDetail.degree}
                    </ItalicDetailCol>
                  </Row>
                </MainInfoRow>
                <DurationRow style={{ width: "100%;" }}>
                  {educationalDetail.startDate} - {educationalDetail.endDate}
                </DurationRow>
                <ExperienceRow style={{ width: "100%;" }}>
                  {educationalDetail.experience.map((responsibility) => {
                    return (
                      <Col span={24}>
                        <li>{responsibility}</li>
                      </Col>
                    );
                  })}
                </ExperienceRow>
              </ExperienceCol>
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
          <Col span={20}>
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
                      Stack Developer from Portland, Oregon. I love digging into
                      both the backend architecture of an application as well as
                      the frontend user interface and experience, joining the
                      two into a complete experience. I work with JavaScript
                      ES6, React, Ruby on Rails, PostgreSQL, GraphQL, and Apollo
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
      <ReactWOW animation="fadeInUp">
        <Row display="flex" justify="center">
          <Col span={20}>
            <SectionTitle>Work Experience</SectionTitle>
            <WorkExperienceRow />
          </Col>
        </Row>
      </ReactWOW>
      <ReactWOW animation="fadeInUp">
        <Row display="flex" justify="center">
          <Col span={20}>
            <SectionTitle>Education</SectionTitle>
            <EducationRow />
          </Col>
        </Row>
      </ReactWOW>
    </Base>
  );
};

export default Homepage;
