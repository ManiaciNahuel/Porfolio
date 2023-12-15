import React from 'react'
import macMillerScreen from "../../assets/jpeg/MacMiller.jpg";
import nbaScreen from "../../assets/jpeg/nba.jpg";
import corlogScreen from "../../assets/jpeg/corlog.jpg";


export const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
          {/*  <!-- PROJECTS SECTION --> */}
          <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-bg">
              <span className="heading-sec__main">Proyectos</span>
              <span className="heading-sec__sub">
                Estos son algunos de mis últimos proyectos en los cuales pude
                aplicar los recursos aprendidos.
              </span>
            </h2>

            <div className="projects__content">
              <div className="projects__row">
                <div className="projects__row-img-cont">
                  <img
                    src={corlogScreen}
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">Corlog Argentina</h3>
                  <p className="projects__row-content-desc">
                    Esta página web fue mi primer proyecto real. Es un sitio web
                    para una empresa de encomiendas que realiza envíos dentro de
                    Argentina. 
                  </p>
                  <a
                    href="./project-1.html"
                    className="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    Más información.
                  </a>
                </div>
              </div>
              <div className="projects__row">
                <div className="projects__row-img-cont">
                  <img
                    src={macMillerScreen}
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">
                    Swimming in Circles
                  </h3>
                  <p className="projects__row-content-desc">
                    El trabajo en cuestión es un e-commerce que maneja una base de datos a través de Firebase. 
                  </p>
                  <a
                    href="./project-2.html"
                    className="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    Más información.
                  </a>
                </div>
              </div>
              <div className="projects__row">
                <div className="projects__row-img-cont">
                  <img
                    src={nbaScreen}
                    alt="Software Screenshot"
                    className="projects__row-img"
                    loading="lazy"
                  />
                </div>
                <div className="projects__row-content">
                  <h3 className="projects__row-content-title">NBA Teams</h3>
                  <p className="projects__row-content-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    facilis tempora, explicabo quae quod deserunt eius sapiente
                    praesentium.
                  </p>
                  <a
                    href="./project-3.html"
                    className="btn btn--med btn--theme dynamicBgClr"
                    target="_blank"
                  >
                    Más información.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
