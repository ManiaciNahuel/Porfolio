import React, { useState } from "react";
import personalPhoto from "../../assets/jpeg/photo_1.jpeg";
import hamMenu from "../../assets/svg/ham-menu.svg";
import hamMenuClose from "../../assets/svg/ham-menu-close.svg";


export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={personalPhoto}
              alt="Ram Maheshwari Logo"
              className="header__logo-img"
            />
          </div>
          <a href="/">
            <span className="header__logo-sub">Nahuel Maniaci</span>
          </a>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./#home" className="header__link">
                {" "}
                Inicio{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">
                Sobre mi{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">
                Proyectos
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">
                {" "}
                Contacto{" "}
              </a>
            </li>
          </ul>
          {/* Hamburger menu */}
          <div className="header__main-ham-menu-cont">
            <button onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? 'btn-open' : ''}`}>
              <img
                src={isOpen ? hamMenuClose : hamMenu}
                alt="hamburger menu"
                className="header__main-ham-menu "
              />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="./"> Inicio </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="./#about"> Sobre mi </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="./#projects"> Proyectos </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="./#contact"> Contacto </a>
              </li>
            </ul>
          </div>
        </div>
      )}

    </header>
  );
};
