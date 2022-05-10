import React, { useEffect, useState } from "react";
import "./Modal.css";
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";

const ModalConvocatory = (props) => {
	const { idConvocatory } = props;
	const [convocatory, setConvocatory] = useState([]);
	useEffect(() => {
    if(idConvocatory){
      axios.get(`${PETITIONS.getOneConvocatory}${idConvocatory}`).then( res => setConvocatory(res.data[0]))
    }
	}, [idConvocatory])

 	return (
		<div>
			<div id='convocatoria' className='modalDialog'>
				{/* <div className='content text-start'> */}
          <div className="card text-start">
            <h5 className="card-header text-center">{convocatory?.name}</h5>
            <div className="card-body">
              <p className="card-text"><em>Cupos: </em>{convocatory?.maxQuotas}</p>
              <p className="card-text"><em>Fecha Inicio: </em>{convocatory?.initialDate}</p>
              <p className="card-text"><em>Fecha Fin: </em>{convocatory?.finalDate}</p>
              <p className="card-text"><em>Fecha Inicio Bootcamp: </em>{convocatory?.initialBootcampDate}</p>
              <p className="card-text"><em>Fecha Fin Bootcamp: </em>{convocatory?.finalBootcampDate}</p>
              <p className="mt-2">
                <em>Parametros</em><br/>
                <em className="ms-3">Perfil Personal:</em> {convocatory?.parameterization?.personalProfile}%<br/>
                <em className="ms-3">Sololearn:</em> {convocatory?.parameterization?.sololearn}%<br/>
                <em className="ms-3">Carta Motivacional:</em> {convocatory?.parameterization?.motivationLetter}%<br/>
              </p>
              <div className="card-text fs-5">
                <em>Ciudad de residencia: </em>
                <ol>
                  {convocatory?.residenceCountry?.map((element, index) => <li key={index}>{element}</li>)}
                </ol>
              </div>
              <div className="card-text fs-5">
                <em>Departamento de residencia: </em>
                <ol>
                  {convocatory?.residencyDepartment?.map((element, index) => <li key={index}>{element}</li>)}
                </ol>
              </div>
              <div className="card-text fs-5">
                <em>Edad maxima: </em>
                <ol>
                  {convocatory?.maxAge?.map((element , index) => <li key={index}>{element}</li>)}
                </ol>
              </div>
              <div className="card-text fs-5">
                <em>Estrato: </em>
                <ol>
                  {convocatory?.maxSocioeconomicStratus?.map((element, index) => <li key={index}>{element}</li>)}
                </ol>
              </div>
              <div className="card-text fs-5">
                <em>Genero: </em>
                <ol>
                  {convocatory?.gender?.map((element, index) => <li key={index}>{element}</li>)}
                </ol>
              </div>
              <div className="card-text fs-5">
                <em>Tipo de poblacion: </em>
                <ol>
                  {convocatory?.typePopulation?.map((element, index) => <li key={index}>{element}</li>)}
                </ol>
              </div>
              <a href='#close' title="close" className='close'>X</a>
            </div>
          </div>
				</div>
			</div>
		// </div>
	);
};

export default ModalConvocatory;
