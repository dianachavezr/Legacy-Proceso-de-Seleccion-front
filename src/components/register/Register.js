import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { PETITIONS } from '../../../requestUrl';
import './Register.css';
  
import Spinner from "../auth/Spinner";
import Swal from "sweetalert2";

const Register = () => {
  const [spinner, mostrarSpinner] = useState(false);
  const [user, setUser] = useState({
    names: null,
    surname: null,
    password: null,
    email: null,
    confirmPassword: null,
  });
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const error = {};

    if (!values.names) error.names = "Este campo es obligatorio";
    else error.names = null;

    if (!values.surname) error.surname = "Este campo es obligatorio";
    else error.names = null;

    if (!values.email) error.email = "Este campo es obligatorio";
    else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        values.email
      )
    )
      error.email = "Revisa tu email";
    else error.email = null;

    if (values.password === null) error.password = "Este campo es obligatorio";
    else if (values.password.length < 6)
      error.password = "Tu contraseña debe tener al menos 6 caracteres";
    else if (values.confirmPassword !== values.password)
      error.password = "Tus contraseñas no son iguales";
    else error.password = null;

    setErrors(error);
    //if has errors return true
    if (error.password || error.email || error.names || error.surname)
      return true;
    else return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate(user)) {
      return;
    }
    mostrarSpinner(true);
    axios
      .post(PETITIONS.register, user)
      .then((res) => {
        setTimeout(() => {
          mostrarSpinner(false);
          Swal.fire({
            icon: "success",
            title: "Registro Exitoso!",
            text: res.data.msg,
          });
          setUser({
            names: null,
            surname: null,
            password: null,
            confirmPassword: null,
            email: null,
          });
        }, 1000);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.response?.data?.msg,
        });
        setTimeout(() => {
          mostrarSpinner(false);
        }, 1000);
      });
  };

  const handleName = (e) => {
    const names = e.target.value;
    setUser({ ...user, names });
    setErrors({ ...errors, names: null });
  };

  const handleSurname = (e) => {
    const surname = e.target.value;
    setUser({ ...user, surname });
    setErrors({ ...errors, surname: null });
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setUser({ ...user, email });
    setErrors({ ...errors, email: null });
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setUser({ ...user, password });
    setErrors({ ...errors, password: null });
  };

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setUser({ ...user, confirmPassword });
    setErrors({ ...errors, password: null });
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          {spinner ? <Spinner /> : null}
          <h1> Registrate </h1>
          <label>Nombre</label>
          <input
            className={`${errors.names ? "fail" : ""}`}
            type="text"
            onChange={handleName}
            value={user.names || ""}
          />
          {errors.names && (
            <small style={{ color: "red" }}>{errors.names}</small>
          )}
          <label>Apellido</label>
          <input
            className={`${errors.surname ? "fail" : ""}`}
            type="text"
            onChange={handleSurname}
            value={user.surname || ""}
          />
          {errors.surname && (
            <small style={{ color: "red" }}>{errors.surname}</small>
          )}
          <label>Correo</label>
          <input
            className={`${errors.email ? "fail" : ""}`}
            type="text"
            onChange={handleEmail}
            value={user.email || ""}
          />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email}</small>
          )}
          <label>Contraseña</label>
          <input
            className={`${errors.password ? "fail" : ""}`}
            type="password"
            onChange={handlePassword}
            value={user.password || ""}
          />
          {errors.password && (
            <small style={{ color: "red" }}>{errors.password}</small>
          )}
          <label>Confirmar Contraseña</label>

          <input
            className={`${errors.password ? "fail" : ""}`}
            type="password"
            onChange={handleConfirmPassword}
            value={user.confirmPassword || ""}
          />
          {errors.password && (
            <small style={{ color: "red" }}>{errors.password}</small>
          )}
          <input className="buttonS" type="submit" />
          <p>
            Ya estas registrado? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
