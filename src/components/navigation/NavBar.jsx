import React from "react";
import johnPng from "../../assets/png/john-doe.png";

export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={johnPng}
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
              <a href="./" className="header__link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">
                About{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
