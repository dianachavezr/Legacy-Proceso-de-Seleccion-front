import React from "react";
import "./Modal.css";

const ModalResults = () => {
    return (
        <div>
            <div>
                <button className="btnModal btn-primaryModal">
                    <a href="#aspirante">Rúbrica</a>
                </button>
            </div>
            <div id="aspirante" className="modalDialog">
                <div className="content">
                    <a href="#close" title="Close" className="close">
                        X
                    </a>
                    <h2>Rúbrica para definir la motivación</h2>
                    <div className="row">
                        <div>
                            <p>
                                <em>1. </em>
                                No es clara su motivación para ingresar a la
                                escuela ni cómo impacta su proyecto de vida.No
                                expresa interés ni curiosidad por investigar y
                                aprender algo nuevo
                            </p>
                        </div>
                        <div>
                            <p>
                                <em>2. </em>
                                Tiene algo de claridad en su motivación para ser
                                parte de la escuela de programación. Tiene poco
                                conocimiento del objetivo de PROGRAMATE. Poco
                                interés y curiosidad por aprender cosas nuevas.
                            </p>
                        </div>
                        <div>
                            <p>
                                <em>3. </em>
                                Expone su motivación para estudiar en la escuela
                                de programación con algo de claridad y relación
                                a su proyecto de vida. Tiene una idea general
                                del objetivo de PROGRÁMATE . Hace mención a que
                                le gusta aprender cosas nuevas sin ser muy
                                específico.
                            </p>
                        </div>
                        <div>
                            <p>
                                <em>4. </em>
                                Muestra seguridad para responder las preguntas
                                logrando vincular su proyecto de vida a los
                                beneficios ofrecidos por la escuela de
                                programación. Tiene conocimiento del objetivo de
                                PROGRÁMATE. Expone razones para ganarse la beca
                                y le interesa aprender.
                            </p>
                        </div>
                        <div>
                            <p>
                                <em>5. </em>
                                Evidencia gran conocimiento sobre la metodología
                                de PROGRÁMATE. Expresa un gran deseo por ganarse
                                la beca, tener curiosidad, aprender o investigar
                                cosas nuevas. Se vende a sí mismo como posible
                                candidato.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalResults;
