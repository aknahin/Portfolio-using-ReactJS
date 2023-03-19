import React from 'react';
import { FaGithub } from 'react-icons/fa';
import projectsData from '../Data/projects.json';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-list">
          {projectsData.map((project) => (
            <div className="project" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
