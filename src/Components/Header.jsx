import React from 'react'

export default function Navbar () {
  return (
    <div className="Navbar">
    <nav className="navbar navbar-light bg-light section">
      <span className="navbar-brand mb-0 h1 flex-grow-1"><h5>{'<.🍰./>'}</h5></span>
      <a className="nav-item nav-link active" href="#">Home</a>
      <a className="nav-item nav-link" href="#services">Services</a>
      <a className="nav-item nav-link" href="#profile">Profile</a>
      <a className="nav-item nav-link" href="#education">Education</a>
      <a className="btn btn-warning" href="mailto:ushanpalliyaguru@gmail.com?subject=Mail from Website">Contact Me!</a>
    </nav>
    </div>
  )
}
