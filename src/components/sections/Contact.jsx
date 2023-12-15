import React from "react";

export const Contact = () => {
 
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      {/* <!-- CONTACT SECTION --> */}
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contacto</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Espero con interés recibir un mensaje suyo y explorar posibles
            oportunidades de trabajar juntos.
          </span>
        </h2>
        <div className="contact__form-container">
          <form className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Nombre/Empresa
              </label>
              <input
                required
                placeholder="Ingrese su nombre/empresa"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Ingrese su Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Mensaje
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Ingrese su mensaje"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn" >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
