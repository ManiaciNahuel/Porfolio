import React from 'react'

export const AboutMe = () => {
  return (
    <section id="about" class="about sec-pad">
          {/*  <!-- ABOUT ME SECTION --> */}
          <div class="main-container">
            <h2 class="heading heading-sec heading-sec__mb-med">
              <span class="heading-sec__main">About Me</span>
              {/* <!-- <span class="heading-sec__sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
              tempora explicabo quae quod deserunt eius sapiente
            </span> --> */}
            </h2>
            <div class="about__content">
              <div class="about__content-main">
                <h3 class="about__content-title">Get to know me!</h3>
                <div class="about__content-details">
                  <p class="about__content-details-para">
                    Hola, soy <strong>Nahuel Maniaci</strong>, un Desarrollador
                    Web Frontend. Me gradué del Colegio Nacional de Monserrat y
                    posteriormente ingresé a la carrera de Ingeniería en
                    Sistemas en la Universidad Tecnológica Nacional. Sin
                    embargo, tras dos años, decidí cambiar mi enfoque hacia el
                    <strong>Desarrollo Web</strong>, participando en diversos
                    cursos online que abarcaban lenguajes web, herramientas de
                    desarrollo y frameworks, incluyendo un capacitaciones en
                    diseño web.
                  </p>
                  <p class="about__content-details-para">
                    A lo largo de este tiempo, he construido diversos proyectos
                    web que han sido esenciales en mi trayectoria como
                    desarrollador. Creo firmemente que el proceso de mejora
                    constante es esencial para alcanzar metas más ambiciosas y
                    para desarrollar proyectos significativos. Mi objetivo
                    principal es seguir ampliando mis habilidades en cada
                    proyecto que emprendo, centrándome en el proceso de
                    <strong>crecimiento y aprendizaje </strong>tanto personal
                    como profesional.
                  </p>
                  <p class="about__content-details-para">
                    No dude en ponerse en contacto.
                  </p>
                </div>
                <a
                  href="/#contact"
                  class="btn btn--med btn--theme dynamicBgClr"
                >
                  Contact
                </a>
              </div>
              <div class="about__content-skills">
                <h3 class="about__content-title">My Skills</h3>
                <div class="skills">
                  <div class="skills__skill">HTML</div>
                  <div class="skills__skill">CSS</div>
                  <div class="skills__skill">SASS</div>
                  <div class="skills__skill">GIT</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">React</div>
                  <div class="skills__skill">Firebase</div>
                  <div class="skills__skill">Adobe Photoshop</div>
                  <div class="skills__skill">Adobe Illustrator</div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
