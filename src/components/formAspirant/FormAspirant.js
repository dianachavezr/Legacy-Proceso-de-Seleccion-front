import React, { useState } from "react";
import Step1 from "../stepForm/Step1";
import "./FormAspirant.css";

const FormAspirant = () => {
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    firstSurname: "",
    secondSurname: "",
    document: "",
    numberDocument: "",
    pdf: "",
    email: "",
    phone1: "",
    phone2: "",
    nationality: "",
    migrant: "",
    liveColombia: "",
    department: "",
    municipality: "",
    locality: "",
    addres: "",
    stratum: "",
    birth: "",
    age: "",
    birthTwo: "",
    sex: "",
    status: "",
    academicLevel: "",
    title: "",
    occupation: "",
    unemployed: "",
    employment: "",
    armedConflict: "",
    computer: "",
    logProgramate: "",
    accesComputer: "",
    profileSololearn: "",
    dreams: "",
    motivation: "",
  });

  const {firstName, secondName, firstSurname, secondSurname, document, numberDocument, pdf, email, phone, 
         nationality, migrant, liveColombia, department , municipality, locality, addres, stratum, birth, age, birthTwo,
         sex, status,academicLevel,title,occupation, unemployed, employment, armedConflict, computer, logProgramate, 
         accesComputer, profileSololearn, dreams, motivation} = data


  const handeleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    setData({
      firstName: "",
      secondName: "",
      firstSurname: "",
      secondSurname: "",
      document: "",
      numberDocument: "",
      pdf: "",
      email: "",
      phone1: "",
      phone2: "",
      nationality: "",
      migrant: "",
      liveColombia: "",
      department: "",
      municipality: "",
      locality: "",
      addres: "",
      stratum: "",
      birth: "",
      age: "",
      birthTwo: "",
      sex: "",
      status: "",
      academicLevel: "",
      title: "",
      occupation: "",
      unemployed: "",
      employment: "",
      armedConflict: "",
      computer: "",
      logProgramate: "",
      accesComputer: "",
      profileSololearn: "",
      dreams: "",
      motivation: "",
    })

  }
  const  getCountrie = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const request = await fetch(url);
    const countrie = await request.json();
    const countries = countrie.map(item => item.name.common).sort()
    setCountries(countries)
  }
  
  getCountrie()


/*   const  getDepartment = async () => {
    const depUrl = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json';
    const requestDep = await fetch(depUrl);
    const department = await requestDep.json();
    const departments = department.map(item => item.departamento).sort()
    setDepartment(departments)
  }
  
  getDepartment() */


  return (

    <div className="form mt-4">
      <h3 className="mb-4">Formulario De Inscripción</h3>

      <form onSubmit={sendData}>
          <Step1 data={data} handeleChange={handeleChange}/>


        <button
          className="btn btn-success prueba mt-4"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>

  );
};

export default FormAspirant;


