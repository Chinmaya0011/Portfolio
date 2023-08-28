import React, { useState, useEffect } from 'react';
import './Home.css';
import myImage from './New folder/dp.jpg'; // Update with the correct image path
// ... (import statements and other code)

const Home = () => {
  const [isDesigner, setIsDesigner] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsDesigner((prevIsDesigner) => !prevIsDesigner);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="content-left">
          <img src={myImage} alt="Profile" className="profile-image" />
        </div>
        <div className="content-right">
          <h1>
            Welcome to My Portfolio
          </h1>
          <p className="wavy">
            Hey there, I'm a{' '}
            <span className={isDesigner ? 'highlight designer' : 'highlight developer'}>
              {isDesigner ? 'DESIGNER' : 'DEVELOPER'}{' '}
            </span>
            from the vibrant city of Bhubaneswar, where imagination meets innovation! Let's turn ideas into stunning creations together.
          </p>


          <button>Hire Me</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
