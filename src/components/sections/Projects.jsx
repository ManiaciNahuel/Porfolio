import React from "react";
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
            Estos son algunos de mis últimos proyectos en los que he tenido la oportunidad de poner en práctica los conocimientos adquiridos.
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
              <div className="projects__row-content-links">
              <a
                href="https://corlogargentina.com.ar"
                className="btn2 btn2--med btn20--inline dynamicBgClr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar Página
              </a>
              <a
                  href="https://github.com/ManiaciNahuel/corlog"
                  className="btn2 btn2--med btn2--inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio
              </a>
              </div>
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
                El trabajo en cuestión es un e-commerce que maneja una base de
                datos a través de Firebase.
              </p>
              <div className="projects__row-content-links">
              <a
                href="https://maniaci-nahuel-ecommerce.netlify.app/"
                className="btn2 btn2--med btn20--inline dynamicBgClr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar Página
              </a>
              <a
                  href="https://github.com/ManiaciNahuel/e-commerce-maniaci"
                  className="btn2 btn2--med btn2--inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio
                </a>
                </div>
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
                Página básica con una forma de importar y utilizar datos en JavaScript, esta destinada a mostrar información sobre equipos de NBA renderizandolos en el DOM desde un archivo JS.
              </p>
              <div className="projects__row-content-links">
                <a
                  href="https://maniacinahuel.github.io/nba/"
                  className="btn2 btn2--med btn20--inline dynamicBgClr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Página
                </a>
                <a
                  href="https://github.com/ManiaciNahuel/nba"
                  className="btn2 btn2--med btn2--inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
