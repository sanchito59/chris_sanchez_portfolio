import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'antd'

const OuterCard = styled.div`
  max-width: 380px;

  transition: transform 0.3s;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ProjectTitle = styled(Col)`
  background: #00171f;
  color: #fdfffc;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 8px;
  font-size: 18px;

  a {
    color: white;
    :hover {
      color: #6a95d4;
      text-decoration: underline;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const DemoLinksRow = styled(Row)`
  background: #00171f;
  color: #fdfffc;
  padding: 8px;
  font-weight: 600;

  a {
    color: white;
    :hover {
      color: #6a95d4;
      text-decoration: underline;
    }
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  margin-bottom: 0px;
`;

const Description = styled(Col)`
  border-left: 2px solid #00171f;
  border-right: 2px solid #00171f;
  border-bottom: 2px solid #00171f;
  padding: 8px;
  background: white;
`;

const TechnologyRow = styled(Row)`
  padding: 6px 8px;

    /* Mozilla */
  li {
    list-style: inside; 
  }
`;

const TechnologyTitle = styled.h2`
  padding: 0px 8px;
  margin-bottom: 0px;
  text-decoration: underline;
`;

const Technologies = styled(Col)`
  border-left: 2px solid #00171f;
  border-right: 2px solid #00171f;
  border-bottom: 2px solid #00171f;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: white;
`;

const ProjectCard = (props) => {
  const { title, image, description, source, liveDemo, technologies } = props;
  return (
    <OuterCard>
      <ProjectTitle lg={24} md={24} sm={24} xs={24}>
        <a href={liveDemo ? liveDemo : source} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </ProjectTitle>
      <a href={liveDemo ? liveDemo : source} target="_blank" rel="noopener noreferrer">
        <Col lg={24} md={24} sm={24} xs={24}>
          <ProjectImage src={image} alt={title}></ProjectImage>
        </Col>
      </a>
      <DemoLinksRow type="flex" justify="center">
        <Col lg={12} md={12} sm={12} xs={12}><a href={liveDemo} target="_blank" rel="noopener noreferrer"><StyledIcon icon={faExternalLinkAlt} />Live Demo</a></Col>
        <Col lg={12} md={12} sm={12} xs={12}><a href={source} target="_blank" rel="noopener noreferrer"><StyledIcon icon={faGithub} />Source Code</a></Col>
      </DemoLinksRow>
      <Description lg={24} md={24} sm={24} xs={24}>
        {description}
      </Description>
      <Technologies lg={24} md={24} sm={24} xs={24}>
        <TechnologyTitle>Technologies</TechnologyTitle>
        <TechnologyRow>
          {technologies.map((technology) => {
            return <Col span={12} key={source}>
              <li>
                {technology}
              </li>
            </Col>
          })}
        </TechnologyRow>
      </Technologies>
    </OuterCard>
  );
}

export default ProjectCard;
