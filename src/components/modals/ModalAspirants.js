
import "./Modal.css";
import  React from "react"
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";
import {useEffect, useState} from "react";

const ModalAspirants = ({data}) => {
	
	/* const [ userId, setuserId] = useState([]);
	useEffect(() => {
    if(user_id){
      axios.get(`${PETITIONS.GetAnswersFromForm}${user_id}`).then( res => setuserId(res.data[0]))
    }
	}, [user_id])
 */
	

let  {  
            user_id,
            firstName,
            secondName,
            firstSurname,
            secondSurname,
            documentType,
            documentNumber,
            documentPdf,
            age,
            sex,
            nacionality,
            residencyDepartment,
            municipalityOfResidency,
            locationInBogota,
            Stratum,
            phone1,
            phone2,
            email,
            dateOfBirth,
            maritalStatus,
            currentCountry,
            address,
            areaType,
            billPdf,
            disability,
            pcAccess,
            familyIncome,
            householdMembers,
            numberOfChildren,
            internetCompany,
            mbCount,
            internetAccess,
            vulnerablePopulation,
            degreeTitle,
            academicLevel,
            studiesPdf,
            cvPdf,
            unemployementTime,
            currentOccupation,
            contractWorker,
            householder,
            firstLanguage,
            secondLanguage,
            languageLevel,
            soloLearnProfile } 
            = data



    return (
        
        
        <div>
           
              
           <div id="aspirante" className="modalDialog">
                        <div className="content">
                            <a href="#close" title="Close" className="close">
                                X
                            </a>
                            <h2>Datos del estudiante</h2>
                            <div className="row">
                                <div className="col-12 col-md-6 d-flex align-item-left item">
                                    <p>
                                        {" Primer nombre:" + 
                                        firstName}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 d-flex align-item-left">
                                    <p>
                                        {"Segundo nombre:" + 
                                        secondName}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6 d-flex align-item-left item">
                                    <p>
                                        {" Primer Apellido:" + 
                                        firstSurname}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Segundo Apellido:" + 
                                        secondSurname}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Tipo de Docuemnto:" + 
                                        documentType}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Numero de documento:" + 
                                        documentNumber}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Pdf de el Documento:" + 
                                        documentPdf}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Edad:" + 
                                        age}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Sexo:" + 
                                        sex}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Nacionalidad:" + 
                                        nacionality}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Departamento de residencia:" + 
                                        residencyDepartment}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Municipio de residencia:" + 
                                        municipalityOfResidency}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Locacion en bogota:" + 
                                        locationInBogota}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Estrato:" + 
                                        Stratum}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Telefono 1:" + 
                                        phone1}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p> {"Telefono Alterno:" + 
                                    phone2}

                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Email:" + 
                                        email}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Fecha de Nacimiento:" + 
                                        dateOfBirth}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Estado civil:" + 
                                        maritalStatus}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Pais de Residencia:" + 
                                        currentCountry}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Direccion:" + 
                                        address}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Tipo de area:" + 
                                        areaType}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Pdf de recibo:" + 
                                        billPdf}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Discapacidad:" + 
                                        disability}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Personas dependientes Economicamentes:" + 
                                        householder}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Ingresos Familiarias:" + 
                                        familyIncome}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"N de personas dependientes:" + 
                                        householdMembers}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Hijos:" + 
                                        numberOfChildren}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Compañia de internet:" + 
                                        internetCompany}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Cantidad de Megas:" + 
                                        mbCount}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Acceso a Internet:" + 
                                        internetAccess}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Tipo de poblacion:" + 
                                        vulnerablePopulation}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Titulo:" + 
                                        degreeTitle}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Maximo Estudio alcanzado:" + 
                                        academicLevel}
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>
                                    {"Pdf de el titulo:" + 
                                    studiesPdf}
                                </p>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Hoja de vida:" + 
                                        cvPdf}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Situacion Laboral:" + 
                                        currentOccupation}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Tiempo de deseempleo:" + 
                                        unemployementTime}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"?:" + 
                                        contractWorker}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Acceso a pc:" + 
                                        pcAccess}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Lenguaje Nativo:" + 
                                        firstLanguage}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Otro idioma:" + 
                                        secondLanguage}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Nivel de el idioma:" + 
                                        languageLevel}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <p>
                                        {"Perfil de soloLearn:" + 
                                        soloLearnProfile}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>
    );
};

export default ModalAspirants;
