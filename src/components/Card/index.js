import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd'

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProjectCard = (props) => {
  const { title, image, description, source, liveDemo, technologies } = props;
  return (
    <>
      <Col lg={24} md={24} sm={24} xs={24}>
        {title}
      </Col>
      <a href={liveDemo ? liveDemo : source} target="_blank">
        <Col lg={24} md={24} sm={24} xs={24}>
          <ProjectImage src={image} alt={title}></ProjectImage>
        </Col>
      </a>
      <Row type="flex" justify="center">
        <Col lg={12} md={12} sm={12} xs={12}><a href={liveDemo}>Live Demo</a></Col>
        <Col lg={12} md={12} sm={12} xs={12}><a href={source}>Source Code</a></Col>
      </Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        {description}
      </Col>
      <Col lg={24} md={24} sm={24} xs={24}>
        <ul>
          {technologies.map((technology) => {
            return <li key={title}>{technology}</li>
          })}
        </ul>
      </Col>
    </>
  );
}

export default ProjectCard;
