import React from "react";
import TechnicalTestAspirant from "../../components/technicalTestAspirant/TechnicalTestAspirant";

import "./ProofAspirant.css";

const ProofAspirant = () => {
    return (
        <div className="proof">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Prueba Tecnica Aspirante</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Prueba</span>
                </div>
            </div>
            <TechnicalTestAspirant />
        </div>
    );
};

export default ProofAspirant;
