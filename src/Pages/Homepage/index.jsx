import React from "react";
import styled from "styled-components";
import ReactWOW from "react-wow";
import { Col, Row } from "antd";
import Base from "../../components/Base";
import FlexContainer from "../../atoms/FlexContainer";
import SectionTitle from "../../components/SectionTitle";
import portrait from "./../../assets/images/portrait.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Resume from "./../../assets/documents/ChrisSanchezJuly2020pdf.pdf";
import Portfolio from "../Portfolio";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyledRow = styled(Row)`
  width: 100%;

  div:nth-child(5) {
    svg {
      height: 50px !important;

      @media only screen and (max-width: 600px) {
        width: 40px !important;
        height: 40px !important;
      }
    }
  }
`;

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

const Emphasis = styled.span`
  font-size: 20px;
  font-weight: 600;
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

const StyledListItem = styled.li`
  line-height: 2;
  font-size: 15px;
  padding: 4px 0px;
`;

const FlexFooter = styled.footer`
  display: flex;
`;

const FooterLink = styled.a`
  color: black;

  h2 {
    margin-right: 8px !important;
    transition: transform 500ms ease-out, font-size 500ms ease-out;

    @media only screen and (max-width: 600px) {
      font-size: 14px !important;
      font-weight: 600;
    }
  }

  h2:hover {
    transform: translateY(-5px);
    font-weight: 600;
    font-size: 24px;
  }
`;

const Breadcrumb = styled.span`
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Homepage = () => {
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/chris--sanchez/",
      icon: faLinkedinIn,
      linkDesc: "LinkedIn",
    },
    {
      link: "https://github.com/sanchito59",
      icon: faGithub,
      linkDesc: "Github",
    },
    {
      link: "https://twitter.com/tswasteland_bot",
      icon: faTwitter,
      linkDesc: "Twitter",
    },
    {
      link: "mailto: c.sanch7@gmail.com",
      icon: faEnvelope,
      linkDesc: "c.sanch7@gmail.com",
    },
    {
      link: Resume,
      icon: faFileAlt,
      linkDesc: "Resume",
    },
  ];

  const IconRow = () => {
    return (
      <FlexContainer>
        <StyledRow>
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
        </StyledRow>
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
        "Performed code reviews on pull requests to ensure code meets production level standards of readability, scalability, and maintainability",
        "Gathered and defined customer requirements to develop clear specifications for creating well-organized project plans",
        "Integrated Sendgrid to generate transactional emails",
        "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements",
        "Merged 100+ pull requests for features such as contact management tools, Excel integration, CRM, account management, and the signup / onboarding flow",
        "Built front-end application features using React.js with scale and reuse-ability such as carousels, galleries, pagination patterns, dropdowns, and forms",
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
                        <StyledListItem>{responsibility}</StyledListItem>
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
        "Completed full-time, 27-week program in web and open-source development",
        "Built over 60 applications with JavaScript, Ruby, React, PostgreSQL",
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
        "Collaborated with others to proofread and publish works of writing in university journals such as Oregon Voice and Unbound.",
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
                        <StyledListItem>{responsibility}</StyledListItem>
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

  const frontendSkills = [
    "JavaScript ES6",
    "React",
    "Rails",
    "HTML5",
    "CSS3",
    "SASS/SCSS",
    "jQuery",
    "Ant Design, Material, Bootstrap",
  ];

  const backendSkills = [
    "Ruby/Rails",
    "PostgreSQL",
    "GraphQL / Apollo",
    "API / JSON / XML",
  ];

  const miscSkills = [
    "Git / Github",
    "Accessibility",
    "Object Oriented Programming",
    "Test Driven Development",
    "Behavior Driven Development",
    "Jest / rspec",
    "Capybara",
    "NPM / yarn",
    "Pair Programming",
    "Adobe Photoshop",
  ];

  const SkillsRow = () => {
    return (
      <Row style={{ width: "100%;" }}>
        <Col lg={8} sm={24}>
          <h2>Frontend</h2>
          <ul>
            {frontendSkills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </Col>
        <Col lg={8} sm={24}>
          <h2>Backend</h2>
          <ul>
            {backendSkills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </Col>
        <Col lg={8} sm={24}>
          <h2>Miscellaneous</h2>
          <ul>
            {miscSkills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </Col>
      </Row>
    );
  };

  const Footer = () => {
    return (
      <FlexFooter>
        {socialLinks.map((social) => {
          return (
            <span>
              <FooterLink
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <Breadcrumb>/</Breadcrumb> {social.linkDesc}
                </h2>
              </FooterLink>
            </span>
          );
        })}
      </FlexFooter>
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
                      My name is <Emphasis>Chris Sanchez</Emphasis> and I am a{" "}
                      <Emphasis>Full Stack Developer</Emphasis> from Portland,
                      Oregon. I love digging into both the backend architecture
                      of an application as well as the frontend user interface,
                      joining the two into a complete experience. I work with{" "}
                      <strong>
                        JavaScript ES6, React, Ruby on Rails, HTML5/CSS3,
                        PostgreSQL, GraphQL,
                      </strong>{" "}
                      and <strong>Apollo</strong> daily. I am an agile learner,
                      quick to adapt, and endlessly curious and engaged with
                      learning and growing. I have humility, a resilience to
                      frustration or confusion, and most importantly, a growth
                      mindset with an ability to pick things up quickly.
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
            <Portfolio />
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
      <ReactWOW animation="fadeInUp">
        <Row display="flex" justify="center">
          <Col span={20}>
            <SectionTitle>Technical Skills</SectionTitle>
            <SkillsRow />
          </Col>
        </Row>
      </ReactWOW>
      <ReactWOW animation="fadeInUp">
        <Row display="flex" justify="center">
          <Col span={20}>
            <Footer />
          </Col>
        </Row>
      </ReactWOW>
    </Base>
  );
};

export default Homepage;
