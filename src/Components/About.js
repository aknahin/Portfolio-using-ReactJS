import React from 'react';
import './About.css';
import data from "../Data/contact.json";

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="container">
        <h2>About Me</h2>
        <p>Hi, my name is {data.name} and I'm a front-end developer with [Number of Years] of experience. I have a strong passion for creating beautiful and functional websites that provide a great user experience.</p>
        <p>My technical skills include HTML, CSS, JavaScript, React, and more. I'm also proficient in using various web development tools such as Git, VS Code, and Photoshop.</p>
        <p>When I'm not coding, I enjoy hiking, playing video games, and spending time with my family and friends.</p>
      </div>
    </div>
  );
}

export default About;
