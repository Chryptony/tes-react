import React from 'react'
import {Link} from 'react-router-dom'
const NavbarMenu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Classroom
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/lecturers">
                  Lecturer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logins">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMenu