import React from 'react';
import './SkillList.css';

const skills = [
  { name: 'HTML', level: 'Beginner' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Pro' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Pro' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Bootstrap', level: 'Beginner' },
  { name: 'Front End Development', level: 'Pro' },
];

const SkillList = () => {
    return (
      <section className="skill-section">
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            I am a passionate front-end developer with expertise in HTML, CSS, and JavaScript. 
            I love creating user-friendly and visually appealing web experiences. 
            My goal is to build efficient and responsive websites that delight users.
          </p>
        </div>
        <div className="skills-container">
          <h1>My Skills</h1>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <p className="skill-name">{skill.name}</p>
                <p className="skill-level">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillList;