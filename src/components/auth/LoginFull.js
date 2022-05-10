import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Auth.css";
import { dispatchLogin } from "../../actions/authAction";
import Spinner from "./Spinner";
import programateacademycolorBN from '../../../dist/Assets/Programateacademynegros.png';

import Swal from "sweetalert2";

const Login = () => {
  //Inicializo hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
    err: "",
    success: "",
  });

  const [spinner, guardarSpinner] = useState(false);
  const dispatch = useDispatch();
  const [isFailing, setIsFailing] = useState({
    email: false,
    password: false,
    msgEmail: "",
    msgPassword: "",
  });
  const auth = useSelector((state) => state.auth);

  const history = useHistory();
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setIsFailing({ email: false, password: false });
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    guardarSpinner(true);
    if (validateEmail(user.email) === null) {
      if (user.password.length < 6) {
        setIsFailing({
          email: true,
          password: true,
        });
      } else {
        setIsFailing({
          email: true,
          password: false,
        });
      }
      setTimeout(() => {
        guardarSpinner(false);
      }, 300);

      return;
    } else {
      if (user.password.length < 6) {
        if (validateEmail(user.email) === null) {
          setIsFailing({
            password: true,
            email: true,
          });
        } else {
          setIsFailing({
            password: true,
            email: false,
          });
        }
        setTimeout(() => {
          guardarSpinner(false);
        }, 300);
        return;
      }
    }
    try {
      await axios
        .post("https://selectprocess.herokuapp.com/api/user/login", {
          email,
          password,
        })
        .then((res) => {
         
          if (res.status === 200) {
            setUser({ ...user, err: "", success: res.data.msg });
            window.localStorage.setItem("firstLogin", true);
            window.localStorage.setItem(
              "loggedAgoraUser",
              JSON.stringify(res.data)
            );
            dispatch(dispatchLogin());
            guardarSpinner(false);
            history.push("/dashboard");
          } else {
            return;
          }
        })
        .catch((err) => {
          setIsFailing({
            email: true,
            password: true,
            msgEmail: "Revisa tus datos",
            msgPassword: "Revisa tus datos",
          });
          guardarSpinner(false);
          setTimeout(() => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Tus credenciales son incorrectas!",
            });
          }, 200);
        });
    } catch (err) {
      return err;
      guardarSpinner(false);
    }
  };

  return (
    <div className="login">
    {/* <div className='Logo__Programate'><img src={programateacademycolorBN} alt='Logo'/></div>  */}
      <div className="cardLoggin">
        <div className="login_page">
        <div className="mensajes">{spinner ? <Spinner /> : null}</div>
          <h2>Iniciar Sesión</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Correo</label>
              <input
                className={`email ${isFailing.email ? "fail" : ""}`}
                type="email"
                placeholder="Correo"
                id="email"
                value={email}
                name="email"
                onChange={handleChangeInput}
              />
              <div
                style={{
                  width: "100%",
                  color: "red",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <small>{isFailing.msgEmail}</small>
              </div>
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                className={`password ${isFailing.password ? "fail" : ""}`}
                type="password"
                placeholder="Contraseña"
                id="password"
                value={password}
                name="password"
                onChange={handleChangeInput}
              />
              <div
                style={{
                  width: "100%",
                  color: "red",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <small>{isFailing.msgEmail}</small>
              </div>
            </div>

            <div className="row">
              {/* <Link to="" ><p>Olvidaste tu contraseña?</p></Link> */}
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
          <p>
            ¿Nuevo usuario? <Link to="/register">Regístrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
