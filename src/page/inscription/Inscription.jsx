import React from "react";
import "./Inscription.scss";
import Parameterization from "../../components/inscription/Parameterization";

const Inscription = () => {
  return (
    <>
      <div className="section__aspirants">
        <div className="section__content d-flex justify-content-between">
          <div className="box__content">
            <span className="text-crumbs bold-500">Programate</span>
            <i class="fas fa-chevron-right subtitle" />
            <span className="text-crumbs">Parametrización</span>
          </div>
        </div>
        <Parameterization />
      </div>

      {/* <TableConvocatory /> */}
    </>
  );
};

export default Inscription;
