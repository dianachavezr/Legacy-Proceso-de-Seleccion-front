import React from "react";
import "./MotivationLetter.css";

const MotivationLetterTable = () => {
    const pruebas1 = [
        {
            nombre: "Mafe Toro",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            dreams: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            calificacion: "4",
        },
        {
            nombre: "Zayda Rivera",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            dreams: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            calificacion: "4",
        },
        {
            nombre: "John Rojas",
            motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            dreams: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum risus libero nisl quis arcu facilisis adipiscing aliquet. Nisl nunc integer tellus nibh nunc placerat. Consectetur tortor nulla justo et eget nascetur commodo. Risus, pellentesque sagittis pellentesque convallis. Ipsum senectus lectus et facilisis posuere pharetra.",
            calificacion: "5",
        },
    ];

    return (
        <>
            <div className="qualify">
            <div className="qualify__content d-flex">
                <span className="upperCase bold"> Carta Motvation </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Programate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs"> Aspirantes </span>
                </div>
            </div>
                <div className="form">
                    <div className="section__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">¿Por qué quieres ser parte de Programate?</th>
                                    <th scope="col">Calificacion</th>
                                    <th scope="col">¿Cuales son tus sueños?</th>
                                    <th scope="col">Calificación</th>
                                    <th scope="col">Promedio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pruebas1.map((prueba, index) => (
                                    <tr key={index} >
                                        <th>{prueba.nombre}</th>
                                        <td>{prueba.motivation}</td>
                                        <td>
                                            <select
                                                name="qualify"
                                                className="form-select"
                                            >
                                                <option value="select">
                                                    Selecione una opción
                                                </option>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                            </select>
                                        </td>
                                        <td>{prueba.dreams}</td>
                                        <td>
                                            <select
                                                name="qualify"
                                                className="form-select"
                                            >
                                                <option value="select">
                                                    Selecione una opción
                                                </option>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                            </select>
                                        </td>
                                        <td>{prueba.calificacion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MotivationLetterTable;
