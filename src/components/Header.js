import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
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
  );
}

export default Header;
