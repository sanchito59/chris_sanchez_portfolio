import React from "react";
import Base from "../../components/Base";
import { Col, Row } from "antd";
import ProjectCard from "../../components/Card";
import shelfSearch from "../../assets/images/shelfSearch.png";
import applianceHub from "../../assets/images/applianceHub.png";
import wastelandBot from "../../assets/images/wastelandBot.png";

const projects = [
  {
    title: "Shelf Search",
    image: shelfSearch,
    description:
      "Shelf Search allows a user to search for books and find an ebook if available. Ability to search for literary events by zipcode. Ability to listen to and search for poetry.",
    technologies: [
      "JavaScript",
      "React",
      "Webpack",
      "NPM",
      "Styled Components",
      "Ant Design",
      "Google API",
      "Open Library API",
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
      "Behavior Driven Development",
      "User Stories",
      "rspec",
      "capybara",
      "100% test coverage",
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
];

const Portfolio = () => {
  return (
    <Base>
      <Row type="flex" justify="center">
        {projects.map((project) => {
          return (
            <Col lg={6} sm={20} md={20}>
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                source={project.sourceCode}
                liveDemo={project.liveDemo}
              />
            </Col>
          );
        })}
      </Row>
    </Base>
  );
};

export default Portfolio;
