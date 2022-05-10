import React from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";

const Step2 = ({ data, setDataToForm, setStep }) => {
	return (
		<>
			<h4>Datos Sociodemográficos 2/4 </h4>
			<Formik
				initialValues={{
					nacionality: data?.nacionality || "",
					currentCountry: data?.currentCountry || "",
					residencyDepartment: data?.residencyDepartment || "",
					municipalityOfResidency: data?.municipalityOfResidency || "",
					address: data?.address || "",
					locationInBogota: data?.locationInBogota || "",
					socialClass: data?.socialClass ||"",
					stratum: data?.stratum || "",
					areaType: data?.areaType || "",
					billPdf: data?.billPdf || "",
					disability: data?.disability || [],
					familyIncome: data?.familyIncome || "",
					householdMembers: data?.householdMembers || "",
					numberOfChildren: data?.numberOfChildren || "",
					vulnerablePopulation: data?.vulnerablePopulation || "",
					pcAccess: data?.pcAccess || "",
					internetAccess: data?.internetAccess || "",
					internetCompany: data?.internetCompany || "",
					mbCount: data?.mbCount || "",
				}}
				validate={(formValues) => {
					const error = {};
					if (!formValues.nacionality) {
						error.nacionality = "Por favor indica tu país de nacimiento";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.nacionality)) {
						error.nacionality = "Por favor ingresa sólo letras";
					}

					if (!formValues.currentCountry) {
						error.currentCountry = "Por favor indica tu país de residencia";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.currentCountry)) {
						error.currentCountry = "Por favor ingresa sólo letras";
					}

					if (!formValues.residencyDepartment) {
						error.residencyDepartment =
							"Por favor indica tu departamento de residencia";
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.residencyDepartment)
					) {
						error.residencyDepartment = "Por favor ingresa sólo letras";
					}

					if (!formValues.socialClass) {
						error.socialClass = "Por favor selecciona tu estrato";
					}

					if (!formValues.pcAccess) {
						error.pcAccess = "Por favor selecciona una respuesta";
					}

					if (!formValues.internetAccess) {
						error.internetAccess = "Por favor selecciona una respuesta";
					}

					return error;
				}}

				onSubmit={(allValues, { resetForm }) => {
          setDataToForm(allValues)
					setStep(prev=> prev < 3 ? prev + 1 : prev)
        }}
			>
				{({ errors }) => (
					<Form className='step2' style={{margin: "100px"}}>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='nacionality' className='form-label'>
									Indica tu país de nacimiento
								</label>
								<Field
									type='text'
									id='nacionality'
									name='nacionality'
									placeholder=''
									className='form-control'
								/>
								<ErrorMessage
									name='nacionality'
									component={() => (
										<div className='error'> {errors.nacionality} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='currentCountry' className='form-label'>
									Indica tu país de residencia
								</label>
								<Field
									type='text'
									id='currentCountry'
									name='currentCountry'
									placeholder=''
									className='form-control'
								/>
								<ErrorMessage
									name='currentCountry'
									component={() => (
										<div className='error'> {errors.currentCountry} </div>
									)}
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div htmlFor='residencyDepartment' className='col-12 col-md-6'>
								<label htmlFor='residencyDepartment' className='form-label'>
									Si actualmente vives en Colombia, indica tu departamento de
									residencia
								</label>
								<Field
									type='text'
									id='residencyDepartment'
									name='residencyDepartment'
									placeholder=''
									className='form-control'
								/>
								<ErrorMessage
									name='residencyDepartment'
									component={() => (
										<div className='error'> {errors.residencyDepartment} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='municipalityOfResidency' className='form-label'>
									Indica tu municipio de Residencia
								</label>
								<Field
									type='text'
									id='municipalityOfResidency'
									name='municipalityOfResidency'
									placeholder=''
									className='form-control'
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='locationInBogota' className='form-label'>
									Si resides en Bogotá, indica tu localidad de residencia
								</label>
								<Field
									id='locationInBogota'
									name='locationInBogota'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona tu localidad</option>
									<option value='Usaquén'>Usaquén</option>
									<option value='Chapinero'>Chapinero</option>
									<option value='Santa Fe'>Santa Fe</option>
									<option value='San Cristóbal'>San Cristóbal</option>
									<option value='Usme'>Usme</option>
									<option value='Tunjuelito'>Tunjuelito</option>
									<option value='Bosa'>Bosa</option>
									<option value='Kennedy'>Kennedy</option>
									<option value='Fontibón'>Fontibón</option>
									<option value='Engativá'>Engativá</option>
									<option value='Suba'>Suba</option>
									<option value='Barrios Unidos'>Barrios Unidos</option>
									<option value='Teusaquillo'>Teusaquillo</option>
									<option value='Los Mártires'>Los Mártires</option>
									<option value='Antonio Nariño'>Antonio Nariño</option>
									<option value='Puente Aranda'>Puente Aranda</option>
									<option value='Candelaria'>Candelaria</option>
									<option value='Rafael Uribe Uribe'>Rafael Uribe Uribe</option>
									<option value='Ciudad Bolívar'>Ciudad Bolívar</option>
									<option value='Sumapaz'>Sumapaz</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='address' className='form-label'>
									Dirección actual de residencia
								</label>
								<Field
									type='text'
									id='address'
									name='address'
									placeholder=''
									className='form-control'
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='socialClass' className='form-label'>
									Estrato socioeconómico
								</label>
								<Field
									id='socialClass'
									name='socialClass'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona tu Estrato</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
								</Field>
								<ErrorMessage
									name='socialClass'
									component={() => (
										<div className='error'> {errors.socialClass} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='areaType' className='form-label'>
									Tipo de área
								</label>
								<Field
									id='areaType'
									name='areaType'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona el tipo de área</option>
									<option value='Rural'>Rural</option>
									<option value='Suburbana'>Suburbana</option>
									<option value='Urbana'>Urbana</option>
								</Field>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='billPdf' className='form-label'>
									Enlace de fotocopia de recibo en Google Drive
								</label>
								<Field
									type='url'
									id='billPdf'
									name='billPdf'
									placeholder=''
									className='form-control'
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='householdMembers' className='form-label'>
									¿Cuantas personas viven en tu casa?
								</label>
								<Field
									id='householdMembers'
									name='householdMembers'
									placeholder=''
									className='form-control'
									as='select'
								>
									<option value='cc'>Selecciona el número de personas</option>
									<option value='Vivo solo/a'>Vivo solo/a</option>
									<option value='2 personas'>2 personas</option>
									<option value='3 personas'>3 personas</option>
									<option value='4 personas'>4 personas</option>
									<option value='5 personas'>5 personas</option>
									<option value='Más de 5 personas'>Más de 5 personas</option>
								</Field>
							</div>
						</div>

						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='numberOfChildren' className='form-label'>
									¿Tienes hijos?
								</label>
								<Field
									id='numberOfChildren'
									name='numberOfChildren'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona el número de hijos</option>
									<option value='No'>No</option>
									<option value='Si, uno'>Si, uno</option>
									<option value='Si, dos'>Si, dos</option>
									<option value='Si, tres'>Si, tres</option>
									<option value='Si, cuatro'>Si, cuatro</option>
									<option value='Si, cinco o más'>Si, cinco o más</option>
								</Field>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='familyIncome' className='form-label'>
									¿Cuál fue el ingreso total de tu grupo familiar el mes pasado?
								</label>
								<Field
									id='familyIncome'
									name='familyIncome'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona el rango de ingreso</option>
									<option value='Menos de un salario mínimo'>
										Menos de un salario mínimo
									</option>
									<option value='Un salario mínimo'>Un salario mínimo</option>
									<option value='Más de 1 hasta 2 salarios mínimos'>
										Más de 1 hasta 2 salarios mínimos{" "}
									</option>
									<option value='Más de 2 hasta 3 salarios mínimos'>
										Más de 2 hasta 3 salarios mínimos
									</option>
									<option value='Más de 3 hasta 5 salarios mínimos'>
										Más de 3 hasta 4 salarios mínimos
									</option>
									<option value='Más de 5 hasta 6 salarios mínimos'>
										Más de 4 hasta 5 salarios mínimos
									</option>
									<option value='Más de 5 hasta 6 salarios mínimos'>
										Más de 5 hasta 6 salarios mínimos
									</option>
									<option value='Más de 5 hasta 6 salarios mínimos'>
										Más de 6 hasta 7 salarios mínimos
									</option>
									<option value='Más de 6 salarios mínimos'>
										Más de 7 salarios mínimos
									</option>
								</Field>
							</div>
						</div>
						<div className='row mt-4'>
							<label htmlFor='vulnerablePopulation' className='form-label'>
								Selecciona el/los tipos de población a los que perteneces
							</label>
							<div className='col-12 col-md-6'>
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Indígena'
									/>
									Indígena
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Raizal'
									/>
									Raizal
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Afrocolombiano'
									/>
									Afrocolombiano
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Palenquero'
									/>
									Palenquero
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Gitano'
									/>
									Gitano
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Migrante'
									/>
									Migrante
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Desplazado por la violencia'
									/>
									Desplazado por la violencia
								</label>{" "}
								<br />
							</div>
							<div className='col-12 col-md-6'>
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='LGBTIQ+'
									/>
									LGBTIQ+
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Víctima del conflicto armado'
									/>
									Víctima del conflicto armado
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Desmovilizado'
									/>
									Desmovilizado
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Persona privadas de libertad o INPEC'
									/>
									Persona privadas de libertad o INPEC
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Desplazado por fenómenos naturales'
									/>
									Desplazado por fenómenos naturales
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Adolescentes en conflicto con la ley penal'
									/>
									Adolescentes en conflicto con la ley penal
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='vulnerablePopulation'
										value='Ninguna'
									/>
									Ninguna
								</label>{" "}
								<br />
							</div>
						</div>
						<div className='row mt-4'>
							<label htmlFor='disability' className='form-label'>
								Selecciona el/los tipos de discapacidad que tengas
							</label>
							<div className='col-12 col-md-6'>
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Discapacidad física'
									/>
									Discapacidad física
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Discapacidad auditiva'
									/>
									Discapacidad auditiva
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Discapacidad visual'
									/>
									Discapacidad visual
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Sordoceguera'
									/>
									Sordoceguera
								</label>{" "}
								<br />
							</div>
							<div className='col-12 col-md-6'>
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Discapacidad intelectual'
									/>
									Discapacidad intelectual
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Discapacidad psicosocial'
									/>
									Discapacidad psicosocial
								</label>{" "}
								<br />
								<label>
									<Field
										type='checkbox'
										name='disability'
										value='Discapacidad múltiple'
									/>
									Discapacidad múltiple
								</label>{" "}
								<br />
								<label>
									<Field type='checkbox' name='disability' value='Ninguna' />
									Ninguna
								</label>{" "}
								<br />
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='pcAccess' className='form-label'>
									¿Tienes acceso a un computador?
								</label>
								<Field
									id='pcAccess'
									name='pcAccess'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona Si o No</option>
									<option value='Si'>Si</option>
									<option value='No'>No</option>
								</Field>
								<ErrorMessage
									name='pcAccess'
									component={() => (
										<div className='error'> {errors.pcAccess} </div>
									)}
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='internetAccess' className='form-label'>
									¿Tienes acceso a internet a través de un plan de servicios de
									hogar?
								</label>
								<Field
									id='internetAccess'
									name='internetAccess'
									className='form-select'
									as='select'
								>
									<option value='cc'>Selecciona Si o No</option>
									<option value='Si'>Si</option>
									<option value='No'>No</option>
								</Field>
								<ErrorMessage
									name='internetAccess'
									component={() => (
										<div className='error'> {errors.internetAccess} </div>
									)}
								/>
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-12 col-md-6'>
								<label htmlFor='internetCompany' className='form-label'>
									Si tu respondiste sí, ¿con qué operador tienes el servicio de
									internet plan hogar?
								</label>
								<Field
									type='text'
									id='internetCompany'
									name='internetCompany'
									placeholder=''
									className='form-control'
								/>
							</div>
							<div className='col-12 col-md-6'>
								<label htmlFor='mbCount' className='form-label'>
									¿De cuantas megas es tu plan hogar?
								</label>
								<Field
									type='text'
									id='mbCount'
									name='mbCount'
									placeholder=''
									className='form-control'
								/>
							</div>
						</div>
						<button onClick={() => setStep(prev => prev -1)} className="btn btn-secondary me-4 mt-3">
								Back
						</button>
						<Field type="submit" value="Next" className="btn btn-warning mt-3"/>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default Step2;
