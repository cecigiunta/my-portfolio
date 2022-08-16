import React from "react";
import Header from "../../Components/Header";
import "./About.css";

function About() {
  return (
    <div className="d-flex flex-row">
      <Header/>
    |<div className="main-height col-8 container-fluid text-white">
        <h1 className="text-white">Sobre mí</h1>
        <div className="div-about">
        <p>
          ¡Bienvenidos a mi portafolio!
        </p>
        <p>
          Soy desarrolladora fullstack (más orientada al front-end) y estoy buscando mi primera oportunidad laboral en IT.
        </p>
        <p>
          Desde chica me gradué en Informática del colegio técnico y hace más de un año me 
          encuentro focalizada en el mundo de la programación estudiando en cursos, bootcamps y de manera autodidacta para poder evolucionar como profesional día a día.
        </p>
        <p>
          Dentro de las tecnologías que fui aprendiendo y con las que actualmente realizo proyectos se encuentran: HTML, CSS, JavaScript, React, Angular, Vue Js, Node, Express y Mongo DB.
          También durante este tiempo aprendí a trabajar en equipo, de manera ágil y con buenas prácticas.
        </p>
        <p>
          Mi objetivo es formar parte de una empresa que me permita lanzarme al mundo IT y donde pueda seguir ampliando mis conocimientos.
          ¡Muchas gracias por leer y espero que disfruten de los proyectos!
        </p>
        </div>
      </div>
    </div>
  );
}
export default About;