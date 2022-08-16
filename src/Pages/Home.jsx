import React from "react";
import {Button} from 'react-bootstrap'
import Header from '../Components/Header'

function Home() {
  return (
    <div className="d-flex flex-row">
      <Header/>
      <div className="col-10">
    <div className="main-height divHome container d-flex flex-column">
      <span className="text-white opacity-75 fs-5">Hola! Soy</span>
        <span className="title display-1">Cecilia Giunta,</span>
        <span className="line anim-typewriter sub-portfolio subtitle display-4 text-white">Desarrolladora Fullstack.</span>

          <img src="../assets/icons/linkedin.png" alt="" />
        <div className="social">
          <a href="#" >
            <Button variant="outline-light" className="btn-lg my-4 mx-4">
            <span className="fa fa-download"></span> Descargar CV
            </Button>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/color/60/000000/linkedin.png" alt="logolinkedin"/>
          </a>
          <a href="https://github.com/cecigiunta" target="_blank" rel="noreferrer">
            <Button variant="outline-light" className="my-4 mx-2">
              GIT
            </Button>
          </a>
        </div>
        </div>
    </div>
    </div>
  );
}
export default Home;