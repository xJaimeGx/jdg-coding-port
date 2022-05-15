import React, { useState } from 'react';
import Navigation from "./Nav";
import About from "./About";
import Contact from './Contact';


function Header() {
  const [currentPage, pageHandler] = useState("About");

  const showPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-info">
          <a
            className="navbar-gitlink"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/xJaimeGx?tab=repositories"
          >
            <span className="about-info">Jaime Gutierrez</span>
          </a>
        </div>
      </nav>
      <Navigation
        currentPage={currentPage}
        pageHandler={pageHandler}
      />
      {/* Call showPage function passing in the currentPage */}
      <main>
        <div>{showPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;