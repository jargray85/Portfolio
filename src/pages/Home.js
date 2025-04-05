import { useState, useEffect } from "react"
import Projects from "./Projects"



function Home() {
  // State and effect for getting projects data
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
            {aboutData.bio}
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
        <div className="resume-container">
          <div 
            className="resume-preview-wrapper"
            onClick={() => {
              console.log('Preview clicked');
              document.getElementById('resume-modal').showModal();
            }}
          >
            <div className="resume-preview">
              <object 
                data="/resume.pdf" 
                type="application/pdf"
                aria-label="Resume Preview"
              >
                <p>Click to view full resume</p>
              </object>
            </div>
          </div>
        </div>

        <dialog id="resume-modal" className="resume-modal">
          <object 
            data="/resume.pdf" 
            type="application/pdf"
            className="resume-full"
          >
            <p>Unable to display PDF</p>
          </object>
          <button onClick={() => document.getElementById('resume-modal').close()} className="modal-close">
            Close
          </button>
        </dialog>
      </section>
    </div>
  )
}

export default Home;
