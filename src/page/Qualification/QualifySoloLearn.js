import axios from "axios";
import React, { useEffect, useState } from "react";
import { PETITIONS } from "../../../requestUrl";

function QualifySololearn() {
  const [convocatories, setConvocatories] = useState([]);
	const [allProfiles, setAllProfiles] = useState([]);
  const [calification, setCalification] = useState()


	useEffect(() => {
		// Get all Profiles
		try {
			axios
				.get(PETITIONS.getAllCandidates)
				.then((res) => setAllProfiles(res.data));
      axios
        .get(PETITIONS.getConvocatories)
        .then((res) => setConvocatories(res.data));
      axios
        .get(PETITIONS.getAllCalifications)
        .then(res => setCalification(res.data));
		} catch (error) {
			return error
		}
	}, []);


	return (<>
    <div className='qualification' >
      <div className='section__qualification' >
        <span className='upperCase bold'>Calificar Sololearn</span>
          <table  className='table_qualification'  id='prueba'>
            <thead>
              <tr>
                <th scope='col'>Nombre aspirante</th>
                <th scope='col'>Nombre en sololearn</th>
                <th scope='col'>Correo electrónico</th>
                <th scope='col'>Puntaje de sololearn</th>
                <th scope='col'>Convocatoria</th>
                <th scope='col'>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {allProfiles?.map((oneProfile) =>
                oneProfile.techTest
                  ? convocatories?.map((convocatory, index) =>
                      convocatory.usersRegistered?.includes(
                        oneProfile.user_id
                      ) ? (
                        calification?.map((userResult) => (
                          userResult.user_id === oneProfile.user_id ?
                        <tr key={index}>
                          <td>
                            {oneProfile.firstName} {oneProfile.secondName}{" "}
                            {oneProfile.firstSurname}{" "}
                            {oneProfile.secondSurname}
                          </td>
                          <td>
                            {userResult.userFullName}
                          </td>
                          <td>
                            {oneProfile.email}
                          </td>
                          <td>
                            <span className={userResult?.soloLearnScore > 0.5 ? 'good' : 'bad'}>{userResult.soloLearnScore === 1 ? 100 : userResult.soloLearnScore.toString().slice(2)}%</span>
                          </td>
                          <td key={convocatory._id}>{convocatory.name}</td>
                          <td>
                            <select name='qualify' >
                              <option value='select'>
                                Selecione una opción
                              </option>
                              <option value='1'>1</option>
                              <option value='2'>2</option>
                              <option value='3'>3</option>
                              <option value='4'>4</option>
                              <option value='5'>5</option>
                            </select>
                          </td>
                        </tr> : null
                        ))
                      ) : null
                    )
                  : null
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div>
        <CSVLink data={data} filename='prueba CSV'>
          <button className='btn btn-success'>Exportar CSV</button>
        </CSVLink>
      </div> */}
    
  </>)
}

export default QualifySololearn;
