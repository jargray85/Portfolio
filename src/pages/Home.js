import { useState, useEffect } from "react";
import Projects from "../pages/Projects";

function Home(props) {
  // State and effect for getting projects data
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getProjectsData();
  }, []);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  };

  const loaded = () => {
    return projects.map((project) => (
      <div key={project.id} className="project">
        <h2>{project.name}</h2>
        <img src={`${props.URL}${project.image}`} alt={project.name} crossOrigin="anonymous" />
        <a href={project.git} className="project-link">
          <button>Github</button>
        </a>
        <a href={project.live} className="project-link">
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  return (
    <div>
      <h1>James Gray</h1>
      <div className="projects-container">{projects ? loaded() : <h1>Loading...</h1>}</div>
    </div>
  );
}

export default Home;
