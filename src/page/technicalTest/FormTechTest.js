import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PETITIONS } from "../../../requestUrl";
import axios from "axios";
import { useHistory } from "react-router-dom";
import  Styles from "./TechTest.css";
import Swal from "sweetalert2";

const FormTechTest = (props) => {
	let history = useHistory();
	const { convocatory, query, data } = props;
	return (
		<div className="Create_Form_Test">
			<h2>{query ? `Actualizar Prueba Tecnica` : "Nueva Prueba Técnica"}</h2>
			<Formik
				initialValues={{
					titleTest: data?.title || "",
					linkTest: data?.url || "",
					// pdfTest: "",
					convocatoryTest: data?.convocatories || [],
				}}
				validate={(allValues) => {
					let errors = {};
					if (!allValues.titleTest) {
						errors.titleTest = "Ingrese un título";
					}
					if (!allValues.linkTest) {
						errors.linkTest = "Introduzca un link válido";
					}
					// if (!allValues.pdfTest) {
					// 	errors.pdfTest = "Por favor agregue un archivo";
					// }
					if (
						!allValues.convocatoryTest ||
						allValues.convocatoryTest.length <= 0
					) {
						errors.convocatoryTest =
							"Por favor seleccione al menos una convocatoria";
					}
					return errors;
				}}
				onSubmit={(allValues, { resetForm }) => {
					const newTest = {
						title: allValues.titleTest,
						url: allValues.linkTest,
						pdf: allValues.pdfTest,
						convocatories: allValues.convocatoryTest,
					};
					try {
						if (query) {
							axios
								.put(`${PETITIONS.updateTechTest}${data._id}`, newTest)
								.then(() => {
									history.push("/prueba");
								});
						} else {
							axios.post(PETITIONS.createTechTest, newTest).then((res) => {
								const msg = res.data.msg;
								Swal.fire({
									icon: "success",
									title: "Prueba creada exitosamente!",
									text: msg,
								  })
								history.push("/prueba");
							});
						}
					} catch (error) {
						return error;
					}
					resetForm();
				}}>
				{({ errors }) => (
					<Form className="form_techtest">
						{/* Technical Test */}
						<div>
							<div>
								<label htmlFor='titleTest'>Título</label>
								<Field type='text' name='titleTest' id='titleTest' />
								<ErrorMessage
									name='titleTest'
									component={() => (
										<span style={{ color: "red", display:"flex"}}>{errors.titleTest}</span>
									)}
								/>
							</div>
							<div>
								<label htmlFor='linkTest'>Url</label>
								<Field type='url' name='linkTest' />
								<ErrorMessage
									name='linkTest'
									component={() => (
										<span style={{ color: "red",display:"flex" }}>{errors.linkTest}</span>
									)}
								/>
							</div>
							{/* <div className="Pdf_Container">
								<label htmlFor='pdfTest'>PDF</label>
								<Field type='file' name='pdfTest' id='pdfTest' />
								<ErrorMessage
									name='pdfTest'
									component={() => (
										<div style={{ color: "red", display:"flex"}}>{errors.pdfTest}</div>
									)}
								/>
							</div> */}
							<div className="Test_Container">
								<label htmlFor='convocatoryTest'>Convocatoria</label>
								<Field name='convocatoryTest' as='select' multiple>
									{convocatory?.map((data) => (
										<option key={data._id} value={data._id}>
											{data.name}
										</option>
									))}
								</Field>
								<ErrorMessage
									name='convocatoryTest'
									component={() => (
										<span style={{ color: "red", display:"flex" }}>
											{errors.convocatoryTest}
										</span>
									)}
								/>
							</div>
						</div>
						<input className='btn btn-warning' style={{margin: "10px 0px 0px 0px"}}type='submit' value={data ? "Actualizar" : "Guardar"} />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormTechTest;
