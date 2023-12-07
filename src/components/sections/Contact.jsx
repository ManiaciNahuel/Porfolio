import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" class="contact sec-pad dynamicBg">
          {/* <!-- CONTACT SECTION --> */}
          <div class="main-container">
            <h2 class="heading heading-sec heading-sec__mb-med">
              <span class="heading-sec__main heading-sec__main--lt">
                Contacto
              </span>
              <span class="heading-sec__sub heading-sec__sub--lt">
                Espero con interés recibir un mensaje suyo y explorar posibles
                oportunidades de trabajar juntos.
              </span>
            </h2>
            <div class="contact__form-container">
              <form action="#" class="contact__form">
                <div class="contact__form-field">
                  <label class="contact__form-label" for="name">
                    Nombre/Empresa
                  </label>
                  <input
                    required
                    placeholder="Ingrese su nombre/empresa"
                    type="text"
                    class="contact__form-input"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="contact__form-field">
                  <label class="contact__form-label" for="email">
                    Email
                  </label>
                  <input
                    required
                    placeholder="Ingrese su Email"
                    type="text"
                    class="contact__form-input"
                    name="email"
                    id="email"
                  />
                </div>
                <div class="contact__form-field">
                  <label class="contact__form-label" for="message">
                    Mensaje
                  </label>
                  <textarea
                    required
                    cols="30"
                    rows="10"
                    class="contact__form-input"
                    placeholder="Ingrese su mensaje"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn--theme contact__btn">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
  )
}
