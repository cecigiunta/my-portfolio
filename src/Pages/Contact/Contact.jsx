import React from "react";
import './Contact.css';
import Header from "../../Components/Header";

function Contact() {
  return (
    <div className="d-flex flex-row">
      <Header/>
    <div className="main-height col-10">
      <h1 className="text-white lead fs-1 my-3">¿Tenés alguna consulta? Dejá tu mensaje !</h1>
    <div className="container d-flex flex-column">
    <form className="d-flex flex-column w-50 mx-auto">

      <div className="div-form form-group gap-5 my-5 py-5 d-flex flex-column px-3">
        <input className="form-control input-form py-2" variant="dark" type="text" name="nombre" id="nombre" placeholder="Nombre"/>
        <input className="form-control input-form py-2" type="text" name="apellido" id="apellido" placeholder="Apellido"/>
        <input className="form-control input-form py-2" type="email" name="email" id="email" placeholder="Email"/>
        <input className="form-control input-form py-5" type="text" name="consulta" id="consulta" placeholder="Tu consulta..."/>
</div>


        <div className="d-flex justify-content-evenly">
        <button type="submit" className="btn btn-lg w-50 my-2 btn-outline-light">
            Enviar
        </button>
        </div>
    </form>
</div>

    </div>
    </div>
  );
}
export default Contact;