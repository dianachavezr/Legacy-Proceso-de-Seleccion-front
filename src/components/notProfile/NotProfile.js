import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../auth/Spinner'
import "./NotProfile.css"

const NotProfile = () => {

    const [spinner, setSpinner] = useState(false)
    const refreshPage =() => {
        setSpinner(true)
        
        setTimeout(() => {
            window.location.reload()
            setSpinner(false)
        }, 2000)
    }
    return (
        <div className='not-found d-flex justify-content-center align-items-center flex-wrap'>
            <div className="box-found d-flex justify-content-center flex-column align-items-center">
            <img
            src="https://i.ibb.co/MMvzd4z/sololearn-logo.png"
            alt="sololearn-logo"
            border="1"
            width="400px"
          />
            <p>Antes de empezar, registrate en la sección <span className='bold-500 text-decoration-underline'><Link to="/inscripcion">FORMULARIO DE INSCRIPCIÓN</Link></span></p>
            <p>Si ya te registraste oprime el boton</p>
            {
                spinner && <Spinner />
            }
            <button onClick={refreshPage} className='btn btn-warning'>Continuar</button>
            </div>
        </div>
    )
}

export default NotProfile
