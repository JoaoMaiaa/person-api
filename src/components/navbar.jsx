import React from 'react'

const clickMenu = (e) => {
  e.target.classList.toggle('is-active')
  activeMenu()
}

const activeMenu = () => {
  let navMenu = document.querySelector('.navbar-menu')
  navMenu.classList.toggle('is-active')
}

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a role="button" onClick={(e) => clickMenu(e)} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item has-text-dark">
          Home
        </a>
        <a className="navbar-item has-text-dark">
          Objetivos
        </a>
        <a className="navbar-item has-text-dark">
          Pessoas
        </a>
        <a className="navbar-item has-text-dark">
          Fale conosco
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar