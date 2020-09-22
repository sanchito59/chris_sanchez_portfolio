import React from "react";
import styled from "styled-components";
import Base from "../../components/Base";
import SectionTitle from "../../components/SectionTitle";
import { Col, Row } from "antd";
import ProjectCard from "../../components/Card";
import FlexContainer from "../../atoms/FlexContainer";
import sojourn from "../../assets/images/sojourn.png";
import shelfSearch from "../../assets/images/shelfSearch.png";
import applianceHub from "../../assets/images/applianceHub.png";
import wastelandBot from "../../assets/images/wastelandBot.png";
import ipsumSample from "../../assets/images/ipsumSample.png";
import colorGuessingGame from "../../assets/images/colorGuessingGame.png";

const projects = [
  {
    title: "Sojourn",
    image: sojourn,
    description:
      "Sojourn is a social site based around sharing locations that are off-the-beaten path or otherwise obscure. It is a Fullstack MERN application partially built with TypeScript (converting currently). It features authentication, profiles, posts, likes, and comments, as well as other views!",
    technologies: [
      "TypeScript",
      "Mongo",
      "Express",
      "React",
      "Node.js",
      "Authentication",
      "Authorization",
      "bcrypt",
      "Material UI",
      "Styled Components",
      "Open Weather API",
      "Leaflet maps",
    ],
    sourceCode: "https://github.com/sanchito59/Sojourn",
    liveDemo: "https://sojourn-mern.herokuapp.com",
  },
  {
    title: "Shelf Search",
    image: shelfSearch,
    description:
      "Shelf Search allows a user to search for books and find an ebook if available. Users also have the ability to search for literary events by zipcode and listen to and search for poetry. Built with React, JavaScript ES6, Google API, and other 3rd party APIs and libraries.",
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
      "TS Waste Land Bot is a Twitter bot built with Node.js and the Twitter API that tweets 4 lines of The Waste Land by T. S. Eliot every hour, ad infinitum. Deployed with Heroku Dynamos running an hourly node worker.",
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
    title: "TypeScript Color Guessing Game",
    image: colorGuessingGame,
    description:
      "Color Guessing Game is a game about testing your knowledge of RGB color values. It is a complete rebuild of a previous project that was written with just an index.html, stylesheet, and single JavaScript file. The intention of re-building the game was to explore TypeScript with React as well as using localStorage to persist information on the browser Document, both of which I had never explored before this project.",
    technologies: [
      "TypeScript",
      "Framer Motion",
      "React.js",
      "styled-components",
      "localStorage",
      "Agile / KANBAN workflow",
    ],
    sourceCode: "https://github.com/sanchito59/color-guessing-game",
    liveDemo: "https://typescript-rgb-guessing.netlify.app/",
  },
  {
    title: "Videogame Ipsum",
    image: ipsumSample,
    description:
      "Need some placeholder text to display content with? Video Game Ipsum is a video game themed lorem ipsum generator built with React for video game, tech, or whatever themed website or copy you're working on! Utilized web scraping of XML and the DOM, Agile workflow with cards, JavaScript, and React.",
    technologies: [
      "JavaScript",
      "Web scraping",
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
  width: 100%;

  @media only screen and (max-width: 600px) {
    margin: 12px;
  }
`;

const ProjectColumn = styled(Col)`
  padding: 24px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    padding: 24px 0px;
  }
`;

const Portfolio = () => {
  return (
    <Base>
      <Row justify="center" id="projects">
        <Col lg={24} sm={24} md={24}>
          <SectionTitle>Projects</SectionTitle>
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
