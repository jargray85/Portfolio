import React from "react"

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="footer">
        <div className="footer-content">
            Created with React and Node.js - Deployed with Heroku and Netlify
            <button onClick={scrollToTop} className="back-to-top-button">
            Back to Top
            </button>
        </div>
        </footer>
    )
}

export default Footer