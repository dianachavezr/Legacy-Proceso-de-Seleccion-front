import React from 'react';
import { ErrorMessage, Form, Field, Formik } from "formik";


const MotivationLetter = ({ data, setDataToForm, setStep }) => {


  return (
      <>
        <h4>Texto motivacional y carta de sueños 4/4 </h4>
        <Formik
          initialValues={{
            motivationLetter: data?.motivationLetter || '',
            dreamLetter: data?.dreamLetter || '',
            policy: [],
          }}
          validate={(formValues) => {
          	const error = {};
          	if (!formValues.motivationLetter) {
          		error.motivationLetter = "Ingresa tu texto de motivacion";
          	}
          	if (!formValues.dreamLetter) {
          		error.dreamLetter = "Ingresa tu carta de sueños";
          	}
            if(formValues.policy.length === 0){
              error.policy = "Debe de aceptar la politica de tratamiento de datos antes de enviar"
            }
          	return error;
          }}
          onSubmit={(allValues) => {
            setDataToForm(allValues, true)
            setStep(prev=> prev < 4 ? prev + 1 : prev)
          }}
        >
          {({ errors }) => (
            <Form className='step3' style={{margin: "100px"}}>
              <div className='motivationLetter'>
                <label htmlFor='motivationLetter'>
                  Texto motivacional:
                </label><br/>
                <Field as="textarea" name="motivationLetter" id="motivationLetter"/>
                <ErrorMessage
									name='motivationLetter'
									component={() => (
										<div className='error'> {errors.motivationLetter} </div>
									)}
								/>
              </div>
              <div className='dreamLetter'>
                <label htmlFor='dreamLetter'>
                  Carta de sueños:
                </label><br/>
                <Field as="textarea" name="dreamLetter" id="dreamLetter"/>
                <ErrorMessage
									name='dreamLetter'
									component={() => (
										<div className='error'> {errors.dreamLetter} </div>
									)}
								/>
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="policy" value="acept" />
                  {" "} Aceptar politica de tratamiento de datos
                </label>
                <ErrorMessage
									name='policy'
									component={() => (
										<div className='error'> {errors.policy} </div>
									)}
								/>
              </div>
              <button onClick={() => setStep(prev => prev -1)} className="btn btn-secondary me-4 mt-3">
                  back
              </button>
              <Field type="submit" value="Enviar" className="mt-3 btn btn-warning"/>
            </Form>
          )}
        </Formik>
      </>
  )
}

export default MotivationLetter