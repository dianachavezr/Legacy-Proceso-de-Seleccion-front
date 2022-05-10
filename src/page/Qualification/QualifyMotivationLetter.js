import React, { useEffect, useState } from "react";
import "./QualifyTechnicalTest.css";
import { CSVLink } from "react-csv";
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";

const QualifyMotivationLetter = () => {
	const [convocatories, setConvocatories] = useState([]);
	const [allProfiles, setAllProfiles] = useState([]);

	useEffect(() => {
		// Get all Profiles
		try {
			axios
				.get(PETITIONS.getAllCandidates)
				.then((res) => setAllProfiles(res.data));
		} catch (error) {
			return error
		}
		// Get all Convocatories
		try {
			axios
				.get(PETITIONS.getConvocatories)
				.then((res) => setConvocatories(res.data));
		} catch (error) {
			return error
		}
	}, []);

	return (
		<>
			<div className='qualification'>
					<div className='section__qualification'>
						<span className='upperCase bold'>Calificar Carta de motivacion</span>
						<table className='table_qualification' id='prueba'>
							<thead>
								<tr>
									<th scope='col'>Nombre aspirante</th>
									<th scope='col'>Correo electronico</th>
									<th scope='col'>Texto de motivacion</th>
									<th scope='col'>Carta de sueños</th>
									<th scope='col'>Convocatoria</th>
									<th scope='col'>Calificación</th>
								</tr>
							</thead>
							<tbody>
								{allProfiles?.map((oneProfile) =>
									oneProfile.motivationLetter && oneProfile.dreamLetter
										? convocatories?.map((convocatory, index) =>
												convocatory.usersRegistered?.includes(
													oneProfile.user_id
												) ? (
													<tr key={index}>
														<td>
															{oneProfile.firstName} {oneProfile.secondName}{" "}
															{oneProfile.firstSurname}{" "}
															{oneProfile.secondSurname}
														</td>
														<td>{oneProfile.email}</td>
														<td>{oneProfile.motivationLetter}</td>
														<td>{oneProfile.dreamLetter}</td>
														<td key={convocatory._id}>{convocatory.name}</td>
														<td>
															<select name='qualify' className='form-select'>
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
													</tr>
												) : null
										  )
										: null
								)}
							</tbody>
						</table>
					</div>
				</div>
				{/* <div>
					<CSVLink data={pruebas1} filename='prueba CSV'>
						<button className='btn btn-success'>Exportar CSV</button>
					</CSVLink>
				</div> */}
			
		</>
	);
};

export default QualifyMotivationLetter;
