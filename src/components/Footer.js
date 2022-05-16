import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>My Web Development Portfolio</strong> - Created by Jaime Gutierrez
          
          <hr />
          <a
            href="https://www.linkedin.com/in/jaime-gutierrez-b05577226/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a
            href="https://github.com/xJaimeGx"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;