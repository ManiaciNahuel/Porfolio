import React from 'react'

export const Projects = () => {
  return (
    <section id="projects" class="projects sec-pad">
          {/*  <!-- PROJECTS SECTION --> */}
          <div class="main-container">
            <h2 class="heading heading-sec heading-sec__mb-bg">
              <span class="heading-sec__main">Proyectos</span>
              <span class="heading-sec__sub">
                Estos son algunos de mis últimos proyectos en los cuales pude
                aplicar algunos de los recursos aprendidos.
              </span>
            </h2>

            <div class="projects__content">
              <div class="projects__row">
                <div class="projects__row-img-cont">
                  <img
                    src="./assets/jpeg/corlog.jpg"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">Corlog Argentina</h3>
                  <p class="projects__row-content-desc">
                    Esta página web fue mi primer proyecto real. Es um sitio web
                    para una empresa de encomiendas que realiza envíos dentro de
                    Argentina.
                  </p>
                  <a
                    href="./project-1.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    Case Study
                  </a>
                </div>
              </div>
              <div class="projects__row">
                <div class="projects__row-img-cont">
                  <img
                    src="./assets/jpeg/MacMiller.jpg"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">
                    Swimming in Circles
                  </h3>
                  <p class="projects__row-content-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    facilis tempora, explicabo quae quod deserunt eius sapiente
                    praesentium.
                  </p>
                  <a
                    href="./project-2.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    Case Study
                  </a>
                </div>
              </div>
              <div class="projects__row">
                <div class="projects__row-img-cont">
                  <img
                    src="./assets/jpeg/nba.jpg"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div class="projects__row-content">
                  <h3 class="projects__row-content-title">NBA Teams</h3>
                  <p class="projects__row-content-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    facilis tempora, explicabo quae quod deserunt eius sapiente
                    praesentium.
                  </p>
                  <a
                    href="./project-3.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
