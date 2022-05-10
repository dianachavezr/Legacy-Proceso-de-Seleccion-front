import React, { useEffect, useState } from "react";
import Table from "../../components/tablita/Table";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";
import "./Convocatory.css";
import { PETITIONS } from "../../../requestUrl";

const Convocatory = () => {
  const [convocatories, setConvocatories] = useState([]);

  const getAllConvocatories = async () => {
    const res = await fetch(PETITIONS.getConvocatories);
    const response = await res.json();

    return response;
  };

  useEffect(() => {
    getAllConvocatories().then((convocatory) => setConvocatories(convocatory));
  }, []);

  const rows = convocatories.map((conv) => ({
    Convocatoria: conv.name,
    Cupos: conv.maxQuotas,
    "Fecha Inicio": conv.initialDate,
    "Fecha Fin": conv.finalDate,
    "Inicio Bootcamp": conv.initialBootcampDate,
    "Fin Bootcamp": conv.finalBootcampDate,
  }));

  return (
    <>
      <div className="table-convocatory">
        {rows.length > 0 ? (
          <Table
            className="table"
            convocatoryData={convocatories}
            key={rows.Id}
            rows={rows}
          />
        ) : (
          <NewConvocatory />
        )}
      </div>
    </>
  );
};

export default Convocatory;
