import React, { useEffect, useState }  from "react";

function Header() {
  // State theme toggle
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          🌓
        </button>
        <button
          className="nav-link github-link" 
          onClick={() => window.open("https://github.com/jargray85", "_blank", "noopener,noreferrer")}>
          GitHub
        </button>
        </div>
        <div className="marquee-container">
          <p className="header-name">James Gray</p>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection("projects")} className="nav-link" style={{ textDecoration: "none" }}>
            Projects
          </button>
          <button onClick={() => scrollToSection("resume")} className="nav-link" style={{ textDecoration: "none" }}>
            Resumé
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
