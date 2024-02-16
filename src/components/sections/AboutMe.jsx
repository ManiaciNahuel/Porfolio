import React from 'react'

export const AboutMe = () => {
  return (
    <section id="about" className="about sec-pad">
      {/*  <!-- ABOUT ME SECTION --> */}
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Sobre Mi</span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">¡Conóceme un poco más!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hola, soy <strong>Nahuel Maniaci</strong>, un Desarrollador
                Web Frontend. Me gradué del Colegio Nacional de Monserrat y
                posteriormente ingresé a la carrera de Ingeniería en
                Sistemas en la Universidad Tecnológica Nacional. Sin
                embargo, tras dos años, decidí cambiar mi enfoque hacia el
                <strong> Desarrollo Web</strong>, participando en diversos
                cursos online que abarcaban lenguajes web, herramientas de
                desarrollo y frameworks, incluyendo un capacitaciones en
                diseño web.
              </p>
              <p className="about__content-details-para">
                A lo largo de este tiempo, he construido diversos proyectos
                web que han sido esenciales en mi trayectoria como
                desarrollador. Creo firmemente que el proceso de mejora
                constante es esencial para alcanzar metas más ambiciosas y
                para desarrollar proyectos significativos. Mi objetivo
                principal es seguir ampliando mis habilidades en cada
                proyecto que emprendo, centrándome en el proceso de
                <strong> crecimiento y aprendizaje </strong>tanto personal
                como profesional.
              </p>
              <p className="about__content-details-para">
                No dude en ponerse en contacto.
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn--med dynamicBgClr"
            >
              Contacto
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">Herramientas</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">SASS</div>
              <div className="skills__skill">Excel</div>
              <div className="skills__skill">Word</div>
              <div className="skills__skill">SQL</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Power Bi</div>
              <div className="skills__skill">Firebase</div>
              <div className="skills__skill">Adobe Photoshop</div>
              <div className="skills__skill">Adobe Illustrator</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
