import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { PETITIONS } from "../../../requestUrl";
import "./TechTest.css";

const AdministerTechnicalTest = () => {
	const [test, setTest] = useState([]);
	const [conv, setConv] = useState([]);

	useEffect(() => {
		axios.get(PETITIONS.getTechTest).then((res) => {
			setTest(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get(PETITIONS.getConvocatories).then((res) => {
			setConv(res.data);
		});
	}, []);

	const handleDelete = (id) => {
		axios.delete(`${PETITIONS.deleteTechTest}${id}`);
		setTest(test.filter((filterTest) => filterTest._id !== id));
	};
	
	return (
		<div className='table-container'>
			{test.length <= 0 ?
			<div className="mainContainer">
				<div className="containerFirstView">
					<div className="containerP">
						<p>
							No hay pruebas técnicas activas <br></br>
							¿Deseas crear una nueva prueba técnica?
						</p>
					</div>
					<Link to="/agregar" className='btn btn-warning'>Crear</Link>
				</div>
			</div>
			:
			<div className="Create_TEST" >
				<div className='title'>
					<h3>Crear Prueba Tecnica</h3>
				</div>
				<Link to='/agregar' className='btn btn-warning mt-3 mb-3'>
					Crear Prueba tecnica
				</Link>
				
				<TableContainer component={Paper}>
					{/* <div className="Technical-test"> */}
					<Table>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Enlace</TableCell>
								<TableCell align='center'>PDF</TableCell>
								<TableCell align='center'>CONVOCATORIAS</TableCell>
								<TableCell align='center'>Acciones</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{test?.map((prop, index) => (
								<TableRow key={index}>
									<TableCell align='center'>
										<a href={prop.url} target='_blank' rel='noopener noreferrer'>
											<i className='fas fa-external-link-alt'></i> {prop.title}
										</a>
									</TableCell>
									<TableCell align='center'>
										<a
											href={prop.pdf}
											target='_blank'
											download={prop.title}
											rel='noopener noreferrer'>
											<i className='far fa-file-pdf'></i>
										</a>
									</TableCell>
									<TableCell align='center'>
										{conv?.map(({ _id, name }) => (
											<div key={_id}>
												{prop.convocatories?.map((id) =>
													id === _id ? name : null
												)}
											</div>
										))}
									</TableCell>
									<TableCell align='center'>
										<div className="actions">
											<Link to={`/editarprueba?idtest=${prop._id}`}>
												<div>
													<i className='far fa-edit edit'></i>
												</div>
											</Link>
											<div>
												<button onClick={() => handleDelete(prop._id)} className="trash-btn">
													<div>
														<i
															className='far fa-trash-alt trash'
														></i>
													</div>
												</button>
											</div>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
			    {/* </div>	 */}
				</TableContainer>
			</div>
			}
		</div>
	);
};

export default AdministerTechnicalTest;
