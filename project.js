import React from 'react';
import './project.css';
import financialImage from './finasor-low-resolution-logo-color-on-transparent-background.png'; // Update the image path for Financial Advisor

const hotelImageURL = "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&w=1000&q=80";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">My Projects</h1> {/* Add the h1 tag */}
      <div className="projects-container">
        <div className="project">
          <img src={hotelImageURL} alt="Hotel Management" className="project-image" />
          <h2>Hotel Management</h2>
          <p>
            This project is about managing hotel operations and reservations. It includes features for booking rooms, managing guest check-ins and check-outs, and more.
          </p>
          <ul>
            <li>Online room reservations</li>
            <li>Guest check-in/check-out</li>
            <li>Room availability and pricing</li>
          </ul>
          <a href="https://your-hotel-management-site.com" target="_blank" rel="noopener noreferrer">
            <button>Visit Project Site</button>
          </a>
        </div>
        <div className="project">
          <img src={financialImage} alt="Financial Advisor" className="project-image" />
          <h2>Financial Advisor</h2>
          <p>
            This project offers financial advice and planning services. It assists users in managing their finances, setting financial goals, and planning investments.
          </p>
          <ul>
            <li>Personalized financial recommendations</li>
            <li>Goal-based financial planning</li>
            <li>Investment portfolio tracking</li>
          </ul>
          <a href="https://your-financial-advisor-site.com" target="_blank" rel="noopener noreferrer">
            <button>Visit Project Site</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
