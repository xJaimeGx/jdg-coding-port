import React from 'react';
import coverImage from "../../assets/cover/world-binary-code.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">This is who i am.</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;