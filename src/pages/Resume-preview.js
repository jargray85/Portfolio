import React, { useState, useEffect } from 'react';

function ResumePreview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openResume = () => {
    // Open the PDF in a new tab
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {isMobile ? (
        // Mobile: show an image preview that opens the PDF in a new tab when clicked
        <div className="resume-preview" onClick={openResume}>
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
          />
        </div>
      ) : (
        // Desktop branch: render the resume preview using the original markup with wrappers and modal
        <div className="resume-container">
          <div
            className="resume-preview-wrapper"
            onClick={() => document.getElementById('resume-modal').showModal()}
          >
            <div className="resume-preview">
              <object data="/resume.pdf" type="application/pdf" aria-label="Resume Preview">
                Click to view full resume
              </object>
            </div>
          </div>
          <dialog id="resume-modal" className="resume-modal">
            <object data="/resume.pdf" type="application/pdf" className="resume-full">
              <p>Unable to display PDF</p>
            </object>
            <button
              onClick={() => document.getElementById('resume-modal').close()}
              className="modal-close"
            >
              Close
            </button>
          </dialog>
        </div>
      )}
    </>
  );
}

export default ResumePreview;