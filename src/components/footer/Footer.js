import React from "react";
import"./headerF.css";
import logo from "./img/programate-blanco-alta.svg";
import educamas from "./img/programate 1 (1).svg";

export default function Footer() {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="logoAndSocialNetworksContainer">
          <div className="box">
            <figure>
              <a href="#">
                <picture>
                  <source srcSet={educamas} media="(max-width: 760px)" />
                  <img src={logo} alt="Logo Educamás" className="Educamas" />
                </picture>
              </a>
            </figure>
          </div>
            <div className="socialNetworksContainer">
             <a href="https://www.facebook.com/somoseducamas"><i className="fab fa-facebook"></i></a>
             <a href="https://www.youtube.com/channel/UCmnr_sLPZ1E8H1VgUtaHGPQ"><i className="fab fa-youtube"></i></a>
             <a href="https://www.instagram.com/somoseducamas/"><i className="fab fa-instagram"></i></a>
              <i className="logo programte"></i>
          </div>
           <div className="grupo-2">
        <small>&copy; 2022 - Todos los Derechos Reservados.</small>
      </div>
        </div>
      </div>
     
    </footer>
  );
}
