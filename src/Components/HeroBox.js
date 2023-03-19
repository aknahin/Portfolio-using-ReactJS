import React from 'react';
import './HeroBox.css';
import data from "../Data/contact.json";

const HeroBox = () => {
  return (
    <div className="hero-box" >
      <div className="container">
        <h1>Front-End Developer Portfolio</h1>
        <p>Hi, my name is {data.name} and I'm a front-end developer. Welcome to my portfolio!</p>
        <a href="#contact"><button>Contact Me</button></a>
      </div>
    </div>
  );
}

export default HeroBox;
