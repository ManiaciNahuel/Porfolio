import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sgb9wyl",
        "template_o2fu0nh",
        form.current,
        "U8FNvjb0lKLZIwSrH"
      )
      .then(
        () => {
          form.current.reset();
          window.location.href = '/';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="contact__form" action="#">
      <input type="text" name="_honey" style={{ display: "none"}}></input>
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor="name">
          Nombre/Empresa
        </label>
        <input
          required
          placeholder="Ingrese su nombre/empresa"
          type="text"
          className="contact__form-input"
          name="user_name"
          id="user_name"
        />
      </div>
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor="email">
          Email
        </label>
        <input
          required
          placeholder="Ingrese su Email"
          type="email"
          className="contact__form-input"
          name="user_email"
          id="user_email"
        />
      </div>
      <div className="contact__form-field">
        <label className="contact__form-label" htmlFor="message">
          Mensaje
        </label>
        <textarea
          required
          cols="15"
          rows="10"
          className="contact__form-input"
          placeholder="Ingrese su mensaje"
          name="message"
          id="message"
        ></textarea>
          </div>
          <input type="submit" className="btn btn--med dynamicBgClr" value="Enviar" />
    </form>
  );
};
