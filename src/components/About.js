import React from 'react';

function About() {
    return (
        <div className="about-home">
            <p className="content">Front-End Web Developer</p>
            <img className="profile-pic" src={process.env.PUBLIC_URL + '/images/profile-pic.jpeg'} alt="Photo of Jaime Gutierrez" />
            <p className="about-content">
                My name is Jaime Gutierrez and I am excited to start a new career in
                front-end web development! I have learned a lot from the coding bootcamp
                at the University of Texas at Austin and believe that I can be a great developer
                if given the opportunity. 
            </p>
        </div>
    )
};

export default About;