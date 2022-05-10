import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PETITIONS } from "../../../requestUrl";
import {Link} from "react-router-dom"
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";


const AspirantConvView = (props) => {
	let { data, test } = props;
	const { user } = useSelector((state) => state.auth);
	const token = useSelector((state) => state.token);

	const handleUserId = async (convId) => {
		const convocatory = await axios.get(
			`${PETITIONS.getOneConvocatory}${convId}`
		);
		let usersInConvo = convocatory.data[0].usersRegistered;

		// Verify if user alredy exist in the array
		if (!usersInConvo.includes(user._id)) {
			usersInConvo.push(user._id); // if the user doesn't exist, add the user to the array
			axios.patch(
				`${PETITIONS.addUsersToConvocatory}${convId}`,
				{
					usersRegistered: usersInConvo,
				},
				{ headers: { Authorization: token } }
			).then(res => console.log(res));
			Swal.fire({
				icon: "success",
				title: "Inscrito exitosamente",
			  });
		} else {
			Swal.fire({
				icon: "success",
				title: "Ya estás inscrito",
			  });
		}
		setTimeout(() => {
			window.location.reload()
		}, 2000);
	};

	
	return (
		<>
			<div style={{ margin: "100px" }}>
				{!data[0]?.usersRegistered.includes(user._id) ? 
					data.map(
						({
							_id,
							name,
							initialBootcampDate,
							finalBootcampDate,
							residenceCountry,
							residencyDepartment,
							maxAge,
							maxSocioeconomicStratus,
							gender,
							typePopulation,
						}) => (
							<div style={{ marginTop: "1rem" }} key={_id}>
							<Paper elevation={5} className="convocatoryCard">
										<Box className="convocatoryCardTitle">
											<Typography gutterBottom variant='h4' component='div'>
												{name}
											</Typography>
											</Box>
											<Box className="convocatoryCardBody">
											<Typography variant='body1' color='inherit'>
												<em>Inicio Bootcamp:</em> {initialBootcampDate}
												<br />
												<em>Fin Bootcamp:</em> {finalBootcampDate}
												<br />
												<Typography variant='overline' color='error'>
													Recuerda tener en cuenta que para aplicar debes de
													cumplir con los siguientes parámetros
													<br />
												</Typography>
												<em>Ciudad o pais de residencia:</em>{" "}
												{residenceCountry.map((country) => ` ${country} `)}
												<br />
												<em>Departamento de residencia:</em>
												<div className="convocatoryListFlex">
												{" "}
												{residencyDepartment.map(
													(department) => <div> {department} </div>
												)}
												</div>
												<em>Edad:</em>{" "}
												{maxAge.map((age) =>
													age === "18-"
														? "Menores de 18 "
														: age === "18+"
														? "Mayores de 18 "
														: "unknow"
												)}
												<br />
												<em>Estrato: </em>{" "}
												{maxSocioeconomicStratus.map(
													(stratus) => `estrato ${stratus} `
												)}
												<br />
												<em>Genero segun ID:</em>{" "}
												{gender.map((gender) => ` ${gender} `)}
												<br />
												<em>Tipo de población:</em>
												<div className="convocatoryListFlex">
												{" "}
												{typePopulation.map((population) => <div> {population} </div> )}
												</div>
											</Typography>
											<em>Prueba Técnica:</em>
											<br />
											<ul className="convocatoryCardsUl">
												{test.map(({ convocatories, title, url }) =>
													convocatories.map((id) =>
														id === _id ? (
															<li key={id}>
																{title}{" "}
																<a href={url} target='_blank'>
																	Detalles
																</a>
															</li>
														) : null
													)
												)}
											</ul>
										<button  className='btn btn-warning'
											onClick={() => handleUserId(_id)}
										>
											Postularse
										</button>
							</Box>
							</Paper>
							</div>
						))
				:
					<>
						<p>Ya estás inscrito en una convocatoria, por favor espera más información</p>
						<p>Para ver la prueba técnica correspondiente a la convocatoria haz <Link to="aspirante">CLICK AQUÍ</Link></p>
					</>
				}
				
			</div>
		</>
	);
};

export default AspirantConvView;
