import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Table";
import RequestService from "../../config/index";
import { Link } from "react-router-dom";
import DisableBtn from "../../components/disableBtn/DisableBtn";

const InterviewDays = () => {
    const [citation, setCitation] = useState([]);
    const getDay = async () => {
        const { data } = await RequestService.get("/admin/citation");
        if (data) {
            setCitation(data);
        }
    };
    useEffect(() => {
        getDay();
    }, []);

    const actions = [
        {
            status: true,
            icon: <DisableBtn />,
        },
    ];

    const fixDate = (Fecha) => {
        return Fecha.split("T")[0];
    };

    const rows = citation.map((interviewDays, idx) => ({
        ID: idx,
        Fecha: fixDate(interviewDays.start),
        Finaliza: fixDate(interviewDays.finish),
        Jornada: interviewDays.journey,
        Cupos: interviewDays.quotas,
        Inscritos: interviewDays.quotasCompleted,
    }));

    return (
        <div className="spirants">
            <div className="spirants__content d-flex justify-content-between">
                <span className="upperCase bold"> Citación </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Programate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Consolidado postulantes</span>
                </div>
            </div>
            <Link to="/calendario">Crear nueva jornada</Link>
            <div className="mt-4">
                <Tablita key={rows.length} rows={rows} />
            </div>
        </div>
    );
};

export default InterviewDays;
