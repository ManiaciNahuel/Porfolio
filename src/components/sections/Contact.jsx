
import React from "react";
import { Form } from "../form/Form";


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
          <Form/>
        </div>
      </div>
    </section>
  );
};
