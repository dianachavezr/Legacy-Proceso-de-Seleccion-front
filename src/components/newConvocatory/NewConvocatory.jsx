import React from "react";
import "./newConvocatory.css";
import { Link } from "react-router-dom";

const NewConvocatory = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="containerFirstView">
          <div className="containerP">
            <p>
              No hay convocatorias <br></br>
              ¿Deseas crear una nueva convocatoria?
            </p>
          </div>
          <div >
            <Link to="/nuevacohorte">
             <button type="submit" className="btn btn-warning">
                Crear
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewConvocatory;
