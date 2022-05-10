import React from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";

const Step3 = ({ data, setDataToForm, setStep}) => {
	return (
		<>
			<h4>Información laboral y académica 3/4 </h4>
			<Formik
				initialValues={{
					degreeTitle: data?.degreeTitle || "",
					academicLevel: data?.academicLevel || "",
					studiesPdf: data?.studiesPdf || "",
					cvPdf: data?.cvPdf || "",
					unemployementTime: data?.unemployementTime || "",
					currentOccupation: data?.currentOccupation || "",
					contractWorker: data?.contractWorker || "",
					householder: data?.householder || "",
					firstLanguage: data?.firstLanguage || "",
					secondLanguage: data?.secondLanguage || "",
					languageLevel: data?.languageLevel || "",
					soloLearnProfile: data?.soloLearnProfile || "",
				}}
				validate={(formValues) => {
					const error = {};
					if (!formValues.soloLearnProfile) {
						error.soloLearnProfile = "Por favor ingresa tu número de perfil";
					}
					return error;
				}}
				onSubmit={(allValues) => {
          setDataToForm(allValues)
					setStep(prev=> prev < 4 ? prev + 1 : prev)
				}}
			>
				{({ errors }) => (
					<Form className='step3' style={{margin: "100px"}}>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='academicLevel' className='form-label'>
									Máximo Nivel Académico Alcanzado
								</label>{" "}
								<br />
								<Field
									id='academicLevel'
									name='academicLevel'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona tu Nivel Académico</option>
									<option value='Bachillerato inconcluso'>
										Bachillerato inconcluso
									</option>
									<option value='Bachiller'>Bachiller o equivalente</option>
									<option value='Técnico'>Técnico</option>
									<option value='Tecnólogo'>Tecnólogo</option>
									<option value='Pregrado'>Pregrado</option>
									<option value='Especialización'>Especialización</option>
									<option value='Maestría'>Maestría</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='degreeTitle' className='form-label'>
									Si tu respuesta anterior fue de técnico en adelante, cuéntanos
									¿Qué título obtuviste?
								</label>{" "}
								<br />
								<Field
									type='text'
									className='form-control'
									name='degreeTitle'
									id='degreeTitle'
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='studiesPdf' className='form-label'>
									Enlace de certificado de estudio en Google Drive
								</label>
								<Field
									className='form-control'
									type='url'
									id='studiesPdf'
									name='studiesPdf'
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='cvPdf' className='form-label'>
									Enlace de hoja de vida en Google Drive
								</label>
								<Field
									className='form-control'
									type='url'
									id='cvPdf'
									name='cvPdf'
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='currentOccupation' className='form-label'>
									¿Cuál de las siguientes categorías describe mejor tu situación
									laboral?
								</label>{" "}
								<br />
								<Field
									id='currentOccupation'
									name='currentOccupation'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona tu Ocupación</option>
									<option value='Independiente'>Independiente</option>
									<option value='Empleado1'>
										Empleado/a, trabajo entre 1 y 39 horas a la semana
									</option>
									<option value='Empleado40'>
										Empleado/a, trabajo 40 horas a la semana o más
									</option>
									<option value='DesempleadoB'>
										Desempleado, busco trabajo
									</option>
									<option value='DesempleadoN'>
										Desempleado, NO busco trabajo
									</option>
									<option value='Jubilado'>Jubilado/a</option>
									<option value='NoPorDiscapacidad'>
										Discapacitado/a, no puedo trabajar
									</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='unemployementTime' className='form-label'>
									Si la respuesta anterior es "desempleado", ¿Desde hace cuánto
									tiempo?
								</label>{" "}
								<br />
								<Field
									id='unemployementTime'
									name='unemployementTime'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona un tiempo</option>
									<option value='Desempleado1'>1 a 2 meses</option>
									<option value='Desempleado3'>3 a 4 meses</option>
									<option value='Desempleado5'>5 a 6 meses</option>
									<option value='Desempleado7'>7 a 11 meses</option>
									<option value='DesempleadoUnAño'>Un año</option>
									<option value='DesempleadoDosAños'>Dos años</option>
									<option value='DesempleadoMásDos'>Más de dos años</option>
									<option value='NoPrimerEmpleo'>
										No he tenido mi primer empleo
									</option>
								</Field>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='householder' className='form-label'>
									Si respondiste que cuentas con empleo ¿Personas en tu familia
									dependen económicamente de tu trabajo?
								</label>{" "}
								<br />
								<Field
									id='householder'
									name='householder'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona Si o No</option>
									<option value='Si'>Si</option>
									<option value='No'>No</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='contractWorker' className='form-label'>
									¿Has tenido antes un empleo formal con contrato?
								</label>{" "}
								<br />
								<Field
									id='contractWorker'
									name='contractWorker'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona Si o No</option>
									<option value='Si'>Si</option>
									<option value='No'>No</option>
								</Field>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='firstLanguage' className='form-label'>
									¿Cuál es tu idioma nativo?
								</label>
								<Field
									id='firstLanguage'
									name='firstLanguage'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona un idioma</option>
									<option value='Español'>Español</option>
									<option value='Inglés'>Inglés</option>
									<option value='Francés'>Francés</option>
									<option value='Ruso'>Ruso</option>
									<option value='Alemán'>Alemán</option>
									<option value='Portugués'>Portugués</option>
									<option value='Catalán'>Catalán</option>
									<option value='Japonés'>Japonés</option>
									<option value='Coreano'>Coreano</option>
									<option value='Italiano'>Italiano</option>
									<option value='Árabe'>Árabe</option>
									<option value='Hindi'>Hindi</option>
									<option value='Mandarín'>Mandarín</option>
									<option value='Otro'>Otro</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='secondLanguage' className='form-label'>
									¿Hablas otro idioma?
								</label>
								<Field
									id='secondLanguage'
									name='secondLanguage'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona un idioma</option>
									<option value='No'>No, sólo mi idioma nativo</option>
									<option value='Español'>Español</option>
									<option value='Inglés'>Inglés</option>
									<option value='Francés'>Francés</option>
									<option value='Ruso'>Ruso</option>
									<option value='Alemán'>Alemán</option>
									<option value='Portugués'>Portugués</option>
									<option value='Catalán'>Catalán</option>
									<option value='Japonés'>Japonés</option>
									<option value='Coreano'>Coreano</option>
									<option value='Italiano'>Italiano</option>
									<option value='Árabe'>Árabe</option>
									<option value='Hindi'>Hindi</option>
									<option value='Mandarín'>Mandarín</option>
									<option value='Otro'>Otro</option>
								</Field>
							</div>
						</div>
						<div className='row mt-12'>
							<div className='col-12 col-md-6'>
								<label htmlFor='languageLevel' className='form-label'>
									¿Qué nivel tienes en este idioma?
								</label>
								<Field
									id='languageLevel'
									name='languageLevel'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona un nivel</option>
									<option value='Bajo'>Bajo</option>
									<option value='Intermedio'>Intermedio</option>
									<option value='Intermedio-Alto'>Intermedio-Alto</option>
									<option value='Avanzado'>Avanzado</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='soloLearnProfile' className='form-label'>
									Número del perfil de Sololearn
								</label>
								<Field
									type='number'
									id='soloLearnProfile'
									className='form-control'
									name='soloLearnProfile'
								/>
								<ErrorMessage
									name='soloLearnProfile'
									component={() => (
										<div className='error'> {errors.soloLearnProfile} </div>
									)}
								/>
							</div>
						</div>
						<button onClick={() => setStep(prev => prev -1)} className="btn btn-secondary me-4 mt-3">
								Back
						</button>
						<Field type="submit" value="Next" className="mt-3 btn btn-warning"/>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default Step3;
