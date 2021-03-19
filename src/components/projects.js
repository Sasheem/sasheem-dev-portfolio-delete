import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

// styled components
const Ul = styled.ul`
  margin-top: 64px;
	margin-bottom: 288px;
	padding-left: 0;
	display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
  }
`;
const Li = styled.li`
    font-weight: 300;
    font-size: 24px;
    width: 100%;
    max-width: 75vw;
    margin-bottom: 32px;

    @media only screen and (min-width: 768px) {
      max-width: 25vw;
    }
`;
const ProjectLink = styled.a`
  min-width: 18em;
  height: 250px;
  border-radius: 0.5rem;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;
const ProjectTitle = styled.p`
  color: #116466;
  font-weight: bold;
  font-size: 16px;
  margin-top: 1em;
`;
const ProjectDescr = styled.p`
  color: #232129;
  font-size: 14px;
`;


// markup
const Projects = ({ links }) => {
    const data = useStaticQuery(graphql`
    fragment processProjectImage on File {
      childImageSharp {
        fluid(maxWidth: 325) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      projectOne: file(relativePath: { eq: "portfolio-web.png" }) {
        ...processProjectImage
      }
      projectTwo: file(relativePath: { eq: "unhoused-humanity-web.png" }) {
        ...processProjectImage
      }
      projectThree: file(relativePath: { eq: "project-web.png" }) {
        ...processProjectImage
      }
      projectBlank: file(relativePath: { eq: "cha-ching-mobile.png" }) {
        ...processProjectImage
      }
    }
  `);

  const projectDataOne = data.projectOne.childImageSharp.fluid;
  const projectDataTwo = data.projectTwo.childImageSharp.fluid;
  const projectDataThree = data.projectThree.childImageSharp.fluid;
  const projectBlank = data.projectBlank.childImageSharp.fluid;

    return (
        <Ul>
            {links.map((link) => (
					<Li key={link.url}>
            <ProjectLink href={link.url} target='_blank' rel="noreferrer">
              <Img 
                // fluid={projectDataOne}
                  fluid={link.project === 'one' 
                      ? projectDataOne : link.project === 'two' 
                      ? projectDataTwo : link.project ===' three' 
                      ? projectDataThree : projectBlank
                  }
                  alt="Portfolio Website"
                  objectFit="fit"
                  style={{ borderRadius: '4px' }}
              />
              <ProjectTitle>
                {link.text}
              </ProjectTitle>
              <ProjectDescr>{link.description}</ProjectDescr>
            </ProjectLink>
						
					</Li>
				))}
        </Ul>
    ); 
};

export default Projects;