import React from 'react';

function About() {
    return (
        <div>
            <p className="about-info">Front-End Web Developer</p>
            <img className="profile-pic" src={process.env.PUBLIC_URL + '/images/profile-pic.jpeg'} alt="Photo of Jaime Gutierrez" />
            <p className="about-info">
                My name is Jaime Gutierrez and i am excited to start a new career in
                front-end web development!
            </p>
        </div>
    )
};

export default About;