import React from 'react'

export const Footer = () => {
  return (
    <footer className="main-footer">
          <div className="main-container">
            <div className="main-footer__upper">
              <div className="main-footer__row main-footer__row-1">
                <h2 className="heading heading-sm main-footer__heading-sm">
                  <span>Social</span>
                </h2>
                <div className="main-footer__social-cont">
                  <a target="_blank" rel="noreferrer" href="/">
                    <img
                      className="main-footer__icon"
                      src="./assets/png/linkedin-ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="/">
                    <img
                      className="main-footer__icon"
                      src="./assets/png/github-ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="/">
                    <img
                      className="main-footer__icon"
                      src="./assets/png/twitter-ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="/">
                    <img
                      className="main-footer__icon"
                      src="./assets/png/yt-ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="/">
                    <img
                      className="main-footer__icon main-footer__icon--mr-none"
                      src="./assets/png/insta-ico.png"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
              <div className="main-footer__row main-footer__row-2">
                <h4 className="heading heading-sm text-lt">Nahuel Maniaci</h4>
                <p className="main-footer__short-desc">
                  Template original: &copy; Copyright 2021. Made by
              <a
                rel="noreferrer"
                target="_blank"
                href="https://rammaheshwari.com"
              >
                Ram Maheshwari
              </a>
              <br />
              Cabe destacar que el diseño de este portafolio fue adaptado para su integración en React, y adicionalmente, se efectuaron ajustes estéticos que fueron desarrollados por mi persona.
                </p>
              </div>
            </div>
          </div>
        </footer>
  )
}
