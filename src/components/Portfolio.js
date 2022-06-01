import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Bloodgate",
    languages: "html, css, js",
    image: "/images/giant_by_alexkuhn.jpg",
    description: "An exciting trading card game set in a mysterious and dark realm.",
    repo: "https://github.com/xJaimeGx/bloodgate.git",
    live: "https://xjaimegx.github.io/bloodgate/",
  },
  {
    id: 1,
    title: "Weather Teller",
    languages: "html, css, js",
    image: "/images/cloud_stock_by_jotvelzetstock.jpg",
    description: "Search for weather and forecast future weather in any city.",
    repo: "https://github.com/xJaimeGx/weather-teller.git",
    live: "https://xjaimegx.github.io/weather-teller/",
  },
  {
    id: 2,
    title: "Aniverse",
    languages: "html, css, js, handlebars",
    image: "/images/hetalia_china__by_panther_fam_daq.jpg",
    description: "A social network for Anime fans to role play anonymously.",
    live: "https://github.com/xJaimeGx/Aniverse.git",
    repo: "https://aniverse-jdg.herokuapp.com/",
  },
  {
    id: 3,
    title: "Javascript Brain Buster",
    languages: "html, css, js",
    image: "/images/java-script.jpg",
    description: "Test your skills with this Javascript code quiz.",
    repo: "https://github.com/xJaimeGx/code-quiz.git",
    live: "https://xjaimegx.github.io/code-quiz/",
  },
  {
    id: 4,
    title: "Password Generator",
    languages: "html, css, js",
    image: "/images/password_image.jpg",
    description: "Generate a secure and random password for all your accounts.",
    repo: "https://github.com/xJaimeGx/password-generator.git",
    live: "https://xjaimegx.github.io/password-generator/",
  },
  {
    id: 5,
    title: "My First Portfolio",
    languages: "html, css",
    image: "/images/portfolio_image.jpg",
    description: "A portfolio created after learning html and css for the first time.",
    repo: "https://github.com/xJaimeGx/password-generator.git",
    live: "https://xjaimegx.github.io/jaime-g-portfolio/",
  },
  {
    id: 6,
    title: "Chatterize",
    languages: "html, css, MERN",
    image: "/images/chatimage.png",
    description: "An app for chatting about your favorite topics.",
    repo: "hhttps://github.com/xJaimeGx/chatterize.git",
    live: "https://chatterize123.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="port-list">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;