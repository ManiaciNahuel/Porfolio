import React from 'react'

export const Home = () => {
  return (
    <section class="home-hero">
          {/*  <!-- HELLO SECTION --> */}
          <div class="home-hero__content">
            <h1 class="heading-primary">Hola! Mi nombre es Nahuel Maniaci</h1>
            <div class="home-hero__info">
              <p class="text-primary">
                Soy un desarrollador web apasionado por la programación.
                <br />
                Construyo sitios y aplicaciones web para facilitarle la vida a
                los demás.
              </p>
            </div>
            <div class="home-hero__cta">
              <a href="/#projects" class="btn btn--bg">
                Projectos
              </a>
            </div>
          </div>
          <div class="home-hero__socials">
            <div class="home-hero__social">
              <a href="/" class="home-hero__social-icon-link">
                <img
                  src="./assets/png/linkedin-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
            <div class="home-hero__social">
              <a href="/" class="home-hero__social-icon-link">
                <img
                  src="./assets/png/github-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
            <div class="home-hero__social">
              <a href="/" class="home-hero__social-icon-link">
                <img
                  src="./assets/png/twitter-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
            <div class="home-hero__social">
              <a href="/" class="home-hero__social-icon-link">
                <img
                  src="./assets/png/yt-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
            <div class="home-hero__social">
              <a
                href="/"
                class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
              >
                <img
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
          </div>
          <div class="home-hero__mouse-scroll-cont">
            <div class="mouse"></div>
          </div>
        </section>
  )
}
