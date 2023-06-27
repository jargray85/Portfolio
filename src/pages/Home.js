import { useState, useEffect } from "react";
import Projects from "../pages/Projects";


function Home(props) {
  // State and effect for getting projects data
  const [projects, setProjects] = useState(null)
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    getProjectsData()
    getAboutData()
  }, [])

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects")
    const data = await response.json()
    setProjects(data)
  }

  const getAboutData = async () => {
    const response = await fetch(props.URL + "about")
    const data = await response.json()
    setAboutData(data)
  } 

  const loaded = () => {
    return projects.map((project) => (
      <div key={project.id} className="project">
        <h3>{project.name}</h3>
        <img src={`${props.URL}${project.image}`} alt={project.name} crossOrigin="anonymous" />
        <div className="project-buttons">
        <a href={project.git} className="project-link" target="_blank" rel="noopener noreferrer">
          <button className="project-button">Github</button>
        </a>
        <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
          <button className="project-button">Live Site</button>
        </a>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1>James Gray</h1>
      <img src="/profile-image.jpg" alt="Profile" className="profile-image" />
      <h2>About</h2>
      {aboutData ? (
        <div className="about-section">
          <p className="about-bio">
            {aboutData.bio}
          </p>
          <p className="about-contact">
            <strong>LinkedIn:</strong>{" "}
            <a href={aboutData.linkedin}>{aboutData.linkedin}</a>
          </p>
          <p className="about-contact">
            <strong>Email:</strong> {aboutData.email}
          </p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <h2>Projects</h2>
      <div className="projects-container-wrapper">
        <div className="projects-container">{projects ? loaded() : <h1>Loading...</h1>}</div>
      </div>  
    </div>
  );
}

export default Home;
