import React from 'react'

export const Home = () => {
  return (
    <section className="home-hero">
          {/*  <!-- HELLO SECTION --> */}
          <div className="home-hero__content">
            <h1 className="heading-primary">Bienvenido a mi portfolio!</h1>
            <div className="home-hero__info">
              <p className="text-primary">
                Soy un desarrollador web apasionado por la programación.
                <br />
                Construyo sitios y aplicaciones web para facilitarle la vida a
                los demás.
              </p>
            </div>
            <div className="home-hero__cta">
              <a href="./#projects" className="btn btn--bg">
                Projectos
              </a>
            </div>
          </div>
          <div className="home-hero__socials">
            <div className="home-hero__social">
              <a href="/" className="home-hero__social-icon-link">
                <img
                  src="./assets/png/linkedin-ico.png"
                  alt="icon"
                  className="home-hero__social-icon"
                />
              </a>
            </div>
            <div className="home-hero__social">
              <a href="/" className="home-hero__social-icon-link">
                <img
                  src="./assets/png/github-ico.png"
                  alt="icon"
                  className="home-hero__social-icon"
                />
              </a>
            </div>
            <div className="home-hero__social">
              <a href="/" className="home-hero__social-icon-link">
                <img
                  src="./assets/png/twitter-ico.png"
                  alt="icon"
                  className="home-hero__social-icon"
                />
              </a>
            </div>
            <div className="home-hero__social">
              <a href="/" className="home-hero__social-icon-link">
                <img
                  src="./assets/png/yt-ico.png"
                  alt="icon"
                  className="home-hero__social-icon"
                />
              </a>
            </div>
            <div className="home-hero__social">
              <a
                href="/"
                className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
              >
                <img
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                  className="home-hero__social-icon"
                />
              </a>
            </div>
          </div>
          <div className="home-hero__mouse-scroll-cont">
            <div className="mouse"></div>
          </div>
        </section>
  )
}
