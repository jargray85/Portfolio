import { useState, useEffect } from "react"

function Projects() {
  const [projects, setProjects] = useState(null)

  const getProjectsData = async () => {
    try {
      const response = await fetch('/projects.json')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Error loading projects:', error)
    }
  }

  useEffect(() => {
    getProjectsData()
  }, [])

  const loaded = () => {
    return projects.map((project, index) => (
      <div key={index} className="project">
        <h3>{project.name}</h3>
        <p><i>{project.about}</i></p>
        <p><strong>Tech Stack:</strong> {project["tech-stack"]}</p>
        <div className="project-buttons">
          <a href={project.git} target="_blank" rel="noopener noreferrer">
            <button>Github</button>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button>Live Site</button>
          </a>
        </div>
      </div>
    ))
  }

  return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;