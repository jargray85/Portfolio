import { useState, useEffect } from "react"
import Projects from "./Projects"
import ResumePreview from "./Resume-preview"



function Home() {
  // State and effect for getting about data
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    const getAboutData = async () => {
      const response = await fetch('/about.json')
      const data = await response.json()
      setAboutData(data)
    }

    getAboutData()
  }, [])

  return (
    <div>
      <div className="profile-img-container">
        <img
          src="/profile-image.jpg"
          alt="James Gray"
          className="profile-image"
        />
      </div>
      <section id="about">
      {aboutData ? (
        <div className="about-section">
          <p className="about-contact">
            <strong>Email:</strong> {aboutData.email}
          </p>
          <p className="about-contact">
            <strong>LinkedIn:</strong>{" "}
            <a href={aboutData.linkedin}>{aboutData.linkedin}</a>
          </p>
          <p className="about-bio">
            <strong>{aboutData.bioIntro}</strong>
            {aboutData.bioDetails}
          </p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      </section>

      <hr className="page-separator" />

      <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container-wrapper">
        <div className="projects-container">
          <Projects />
        </div>
      </div> 
      </section> 

      <hr className="page-separator" />

      <section id="resume">
        <h2>Resumé</h2>
          <ResumePreview />
      </section>
    </div>
  )
}

export default Home;
