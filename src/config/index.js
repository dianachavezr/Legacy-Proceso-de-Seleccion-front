/* eslint-disable class-methods-use-this */
import axios from "axios";

class RequestService {
    constructor() {
        /* */
        this.version = "api";
        this.urlServer = "http://localhost:3001/";
    }

    async post(url, data) {
        try {
            const resp = await axios.post(
                `${this.urlServer}${this.version}${url}`,
                data,
                {
                    withCredentials: true,
                }
            );
            return this.switchCase(resp);
        } catch (error) {
            return this.switchCase(error.request);
        }
    }

    async get(url) {
        try {
            const resp = await axios.get(
                `${this.urlServer}${this.version}${url}`,
                {}
            );
            return this.switchCase(resp);
        } catch (error) {
            return this.switchCase(error.request);
        }
    }

    async put(url, data) {
        try {
            const resp = await axios.put(
                `${this.urlServer}${this.version}${url}`,
                data,
                {
                    withCredentials: true,
                }
            );
            return this.switchCase(resp);
        } catch (error) {
            return this.switchCase(error.request);
        }
    }

    async delete(url) {
        try {
            const resp = await axios.delete(
                `${this.urlServer}${this.version}${url}`,
                {
                    withCredentials: true,
                }
            );
            return this.switchCase(resp);
        } catch (error) {
            return this.switchCase(error.request);
        }
    }

    // eslint-disable-next-line consistent-return
    switchCase(resp) {
        const { status } = resp;
        const respuesta = {
            data: resp.data,
            status: 0,
            mensaje: "",
        };
        switch (status) {
            case 200:
                respuesta.status = 200;
                return respuesta;
            case 201:
                respuesta.status = 201;
                respuesta.mensaje = "Registro exitoso";
                return respuesta;
            case 400:
                respuesta.status = 400;
                respuesta.mensaje =
                    JSON.parse(resp.responseText).message ||
                    "Registro duplicado";
                return respuesta;
            case 401:
                respuesta.status = 401;
                respuesta.mensaje = "Acceso no autorizado";
                return respuesta;
            case 404:
                respuesta.status = 404;
                respuesta.mensaje = "Ruta no encontrada";
                return respuesta;
            case 500:
                respuesta.status = 500;
                respuesta.mensaje = "Error en el servidor";
                return respuesta;
            default:
                break;
        }
    }
}
export default new RequestService();

// import RequestService from '../../../config';
// const getUser = async () => {
// //     const { data } = await RequestService.get('/user/?rol=SUPER_ADMIN');
// //     const { users } = data;
// //     setUsers(users);
// //     setData(users);
// //   };

// //   useEffect(() => {
// //     getUser();
// //   }, [isOpen, isOpenNew, isActive]);

// //Ejemplo PUT
// const EditAdmin = ({row }) => {

//     const [Admin, setAdmin] = useState({});

//     useEffect(() => {
//       setAdmin(row);
//     }, [row]);

//     const [body, setValues] = useState({
//       email: row.email,
//       firstName: row.firstName,
//     });

//     const handleChange = (event) => {
//       setValues({
//         ...body,
//         [event.target.name]: event.target.value,
//       });
//     };

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const res = await RequestService.put(`/user/${Admin.id}`, body);
//
//       };
//     };

//     return (
//       <>
//         <Title title='EDITAR ADMINISTRADOR' />
//         <InfoModal>
//           <form className='edit__FormContainer' onSubmit={handleSubmit}>
//             <div className='edit__LineContainer'>
//               <p>Nombre</p>
//               <input
//                 name='firstName'
//                 className='input90'
//                 value={body.firstName}
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>
//             <div className='edit__LineContainer'>
//               <p>Email</p>
//               <input
//                 name='email'
//                 // type='email'
//                 className='input90'
//                 value={body.email}
//                 onChange={(e) => handleChange(e)}
//               />
//             </div>
//             <div className='edit__ButtonContainer'>
//               <button
//                 type='submit'
//                 className='button-save'
//               >
//                 Guardar
//               </button>
//               <button
//                 type='button'
//                 className='button-cancel'
//                 onClick={onClick}
//               >
//                 Cancelar
//               </button>
//             </div>
//           </form>
//         </InfoModal>

//       </>

//     );
//   };

//   const EditAdmin = ({ onClick, row }) => {

//   const [Admin, setAdmin] = useState({});

//   useEffect(() => {
//     setAdmin(row);
//   }, [row]);

//   const [body, setValues] = useState({
//     email: row.email,
//     firstName: row.firstName,
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...body,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const res = await RequestService.put(`/user/${Admin.id}`, body);
//     if (res.status === 201) {
//       success('Administrador Editado');
//       onClick();
//     } else if (res.status === 400) {
//       rejected();
//       // onClick();
//     };
//   };

//   return (
//     <>
//       <Title title='EDITAR ADMINISTRADOR' />
//       <InfoModal>
//         <form className='edit__FormContainer' onSubmit={handleSubmit}>
//           <div className='edit__LineContainer'>
//             <p>Nombre</p>
//             <input
//               name='firstName'
//               className='input90'
//               value={body.firstName}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           <div className='edit__LineContainer'>
//             <p>Email</p>
//             <input
//               name='email'
//               // type='email'
//               className='input90'
//               value={body.email}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           <div className='edit__ButtonContainer'>
//             <button
//               type='submit'
//               className='button-save'
//             >
//               Guardar
//             </button>
//             <button
//               type='button'
//               className='button-cancel'
//               onClick={onClick}
//             >
//               Cancelar
//             </button>
//           </div>
//         </form>
//       </InfoModal>

//     </>

//   );
// };

// post

// const NewAdmin = ({ onClick }) => {

//     const [body, setValues] = useState({
//        'rol': 'SUPER_ADMIN',
//       'email': '',
//       'firstName': '',
//       'password': 'asdg',
//     });

//     const handleChange = (event) => {
//       setValues({
//         ...body,
//         [event.target.name]: event.target.value,
//       });
//     };

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const res = await RequestService.post('/user', body);
//       if (res.status === 201) {
//         success('Nuevo Administrador Creado');
//         onClick();
//       } else if (res.status === 400) {
//         rejected();
//       };
//     };

//     return (
//       <>
//         <Title title='NUEVO ADMINISTRADOR' />
//         <InfoModal>
//           <form className='new__FormContainer' onSubmit={handleSubmit}>
//             <>
//               <div className='new__LineContainer'>
//                 <p>Nombre</p>
//                 <input
//                   name='firstName'
//                   className='input90'
//                   placeholder='Nombre'
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className='new__LineContainer'>
//                 <p>Email</p>
//                 <input
//                   name='email'
//                   type='email'
//                   className='input90'
//                   placeholder='Introducir Email'
//                   onChange={handleChange}
//                 />
//               </div>
//             </>
//             <div className='new__ButtonContainer'>
//               <button type='submit' className='button-save'>Guardar</button>
//               <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
//             </div>
//           </form>
//         </InfoModal>

//       </>

//     );
//   };
