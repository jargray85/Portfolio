import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <a
            href="https://github.com/jargray85"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link github-link"
        >
            GitHub
        </a>
        <div className="marquee-container">
          <p className="marquee-text">Welcome to James' portfolio!</p>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection("projects")} className="nav-link" style={{ textDecoration: "none" }}>
            Projects
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link" style={{ textDecoration: "none" }}>
            About
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
