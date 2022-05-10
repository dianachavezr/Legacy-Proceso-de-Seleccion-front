import React from "react";
import { Link } from "react-router-dom";

const NoCitations = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="containerFirstView">
          <div className="containerP">
            <p>
              No hay citaciones <br></br>
              ¿Deseas crear una nueva citación?
            </p>
          </div>
          <div className="containerButton">
            <Link to="/nuevacitacion">
             <button type="submit" className="btn btn-success">
                Crear
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoCitations;
