import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {
  const [ headerColor, setHeaderColor ] = useState(false)
  const [ isOpen, setIsOpen ] = useState(false)
  function changeColor() {
      if (window.scrollY >= 10) {
        setHeaderColor(true)// dark
      } else{
        setHeaderColor(false) // transparent
      }
  }
  function clickHandler() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  console.log("isOpen " + isOpen)
  console.log("headerColor " + headerColor)
  window.addEventListener("scroll", changeColor)
  return (
    <header>
      <nav
        className={
          headerColor
            ? "navbar navbar-dark navbar-expand-xl fixed-top header-scroll-in "
            : "navbar  navbar-dark navbar-expand-xl fixed-top header-scroll-out "
        }
      >
        <div className={isOpen ? "container-fluid hamburger-open" : "container-fluid hamburger-close"}>
          <Link className="navbar-brand" to="">
            <img
              src="./assets/the-webb-developer-low-resolution-logo-white-on-transparent-background.png"
              alt="logo"
              id="logo"
              className=""
            />
            <h1 className="brand-name">The<br />Webb Developer</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={clickHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2 fs-4"
                  aria-current="page"
                  to=""
                  style={({ isActive }) => ({
                    color: isActive ? "#F2E8DA" : "#F2E8DA",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2 fs-4"
                  to="projects"
                  style={({ isActive }) => ({
                    color: isActive ? "#F2E8DA" : "#F2E8DA",
                  })}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2 fs-4"
                  to="about"
                  style={({ isActive }) => ({
                    color: isActive ? "#F2E8DA" : "#F2E8DA",
                  })}
                >
                  About
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-lg-inline-flex">
              <li className="nav-item mx-2">
                <a
                  className="nav-link h5 fs-4"
                  href="https://www.linkedin.com/in/ryan-jwebb/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link h5 fs-4"
                  href="https://github.com/ryanwebb24"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link  h5" href="" target="blank">
                  <i className="fa fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
