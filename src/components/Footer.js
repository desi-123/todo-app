import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-item">
        <div className="copy-right">&copy; 2022 By Desalegn Wagaw</div>
        <div className="footer-item__page-list">
          <div className="footer-item__task-page">
            <Link to="/" className="home-link">
              Tasks Page
            </Link>
          </div>
          <div className="footer-item__about-page">
            <Link to="/about" className="about-link">
              About us
            </Link>
          </div>
          <div className="footer-item__term-page">
            <Link to="/term" className="term-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
