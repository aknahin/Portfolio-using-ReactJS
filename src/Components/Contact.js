import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaGithub, FaTwitter } from 'react-icons/fa';
import contactData from '../Data/contact.json';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href={`mailto:${contactData.email}`}><FaEnvelope /> {contactData.email}</a>
        <a href={`tel:${contactData.phone}`}><FaPhone /> {contactData.phone}</a>
        <a href={`https://github.com/${contactData.github}`} target="_blank" rel="noopener noreferrer"><FaGithub /> {contactData.github}</a>
        <a href={`https://twitter.com/${contactData.twitter}`} target="_blank" rel="noopener noreferrer"><FaTwitter /> {contactData.twitter}</a>
      </div>
    </div>
  );
}

export default Contact;
