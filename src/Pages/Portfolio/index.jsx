import React from "react";
import styled from "styled-components";
import Base from "../../components/Base";
import SectionTitle from "../../components/SectionTitle";
import { Col, Row } from "antd";
import ProjectCard from "../../components/Card";
import FlexContainer from "../../atoms/FlexContainer";
import shelfSearch from "../../assets/images/shelfSearch.png";
import applianceHub from "../../assets/images/applianceHub.png";
import wastelandBot from "../../assets/images/wastelandBot.png";
import ipsumSample from "../../assets/images/ipsumSample.png";

const projects = [
  {
    title: "Shelf Search",
    image: shelfSearch,
    description:
      "Shelf Search allows a user to search for books and find an ebook if available. Ability to search for literary events by zipcode. Ability to listen to and search for poetry.",
    technologies: [
      "JavaScript",
      "React",
      "React Router",
      "Webpack",
      "NPM",
      "Styled Components",
      "Ant Design",
      "Web Speech API",
      "Google API",
      "Open Library API",
      "NYT's API",
      "Goodreads API",
    ],
    sourceCode: "https://github.com/sanchito59/Shelf-Search",
    liveDemo: "https://shelf-search.herokuapp.com/#/",
  },
  {
    title: "Appliance Hub",
    image: applianceHub,
    description:
      "Full CRUD inventory system with user reviews and user and admin authentication. Different permissions / functionality depending on role of signed in user.",
    technologies: [
      "Ruby/Rails",
      "PostgreSQL",
      "User Stories",
      "rspec",
      "capybara",
      "100% test coverage",
      "Behavior Driven Development",
    ],
    sourceCode: "https://github.com/sanchito59/Appliance-Hub",
    liveDemo: "https://blooming-fortress-25155.herokuapp.com/",
  },
  {
    title: "TS Wasteland Bot",
    image: wastelandBot,
    description:
      "TS Waste Land Bot is a Twitter bot built with Node.js and the Twitter API that tweets 4 lines of The Waste Land by T. S. Eliot every hour, ad infinitum.",
    technologies: [
      "Node.js",
      "JavaScript",
      "Twitter API",
      "node-twitterbot",
      "Heroku Dynamos",
    ],
    sourceCode: "https://github.com/sanchito59/ts_wastelandbot",
    liveDemo: "https://twitter.com/TSwasteland_bot",
  },
  {
    title: "Videogame Ipsum",
    image: ipsumSample,
    description:
      "Need some placeholder text to display content with? Video Game Ipsum is a video game themed lorem ipsum generator built with React for video game, tech, or whatever themed website or copy you're working on!",
    technologies: [
      "JavaScript",
      "React",
      "styled-components",
      "clipboard.js",
      "Agile / KANBAN workflow",
    ],
    sourceCode: "https://github.com/sanchito59/videogame_ipsum",
    liveDemo: "https://videogameipsum.netlify.app/",
  },
];

const ProjectRow = styled(Row)`
  margin: 24px;

  @media only screen and (max-width: 600px) {
    margin: 12px;
  }
`;

const ProjectColumn = styled(Col)`
  padding: 24px;

  @media only screen and (max-width: 600px) {
    padding: 24px 0px;
  }
`;

const Portfolio = () => {
  return (
    <Base>
      <Row justify="center">
        <Col lg={24} sm={24} md={24}>
          <SectionTitle center={true}>Projects</SectionTitle>
        </Col>
      </Row>
      <FlexContainer>
        <ProjectRow display="flex" justify="center">
          {projects.map((project) => {
            return (
              <ProjectColumn lg={8} sm={20} md={20}>
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  technologies={project.technologies}
                  source={project.sourceCode}
                  liveDemo={project.liveDemo}
                />
              </ProjectColumn>
            );
          })}
        </ProjectRow>
      </FlexContainer>
    </Base>
  );
};

export default Portfolio;
