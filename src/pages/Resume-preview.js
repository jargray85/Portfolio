import React, { useState, useEffect } from 'react';

function ResumePreview() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Check if device is iOS Safari
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      
      if (width <= 480) {
        setDeviceType('mobile');
      } else if (isIOS || isSafari) {
        setDeviceType('safari');
      } else {
        setDeviceType('desktop');
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  if (deviceType === 'safari') {
    return (
      <div className="resume-container" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '15px' }}>
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            style={{
              width: '300px',
              height: 'auto',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--button-bg)',
                border: '2px solid var(--text-primary)',
                borderRadius: '20px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9em'
              }}
            >
              View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--button-bg)',
                border: '2px solid var(--text-primary)',
                borderRadius: '20px',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.9em'
              }}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {deviceType === 'mobile' ? (
        <div className="resume-preview" onClick={openResume}>
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
          />
        </div>
      ) : (
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