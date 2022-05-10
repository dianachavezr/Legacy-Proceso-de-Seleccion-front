import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Table";
import RequestService from "../../config/index";
import DisableBtn from "../../components/disableBtn/DisableBtn";

const SelectionResults = () => {
    const [results, setResults] = useState([]);
    const getResults = async () => {
        const { data } = await RequestService.get("/admin/results");
        if (data) {
            setResults(data.data);
        }
    };
    useEffect(() => {
        getResults();
    }, []);

    const actions = [
        {
            status: false,
            icon: { DisableBtn },
        },
    ];

    const checkScoreColor = (score) => {
        let color = "";

        if (score < 2) {
            color = "#A00000";
        } else if (score >= 2 && score < 3) {
            color = "#CD6A2E";
        } else if (score >= 3 && score < 4) {
            color = "#FFD200";
        } else {
            color = "#23631F";
        }
        return color;
    };

    const rows = results.map((result) => ({
        Nombre: result.userFullName,
        "Promedio entrevista": (
            <div
                style={{
                    background: checkScoreColor(result.soloLearnScore),
                    width: "20px",
                    height: "20px",
                }}
            >
                {result.soloLearnScore}
            </div>
        ),
        "Promedio assessment": (
            <div
                style={{
                    background: checkScoreColor(result.personalProfileScore),
                    width: "20px",
                    height: "20px",
                }}
            >
                {result.personalProfileScore}
            </div>
        ),
        "Promedio día de selección": (
            <div
                style={{
                    background: checkScoreColor(result.motivationScore),
                    width: "20px",
                    height: "20px",
                }}
            >
                {result.motivationScore}
            </div>
        ),
        Estado: (
            <select>
                <option value="pasa">Pasa</option>
                <option value="nopasa">No pasa</option>
            </select>
        ),
    }));

    return (
        <div className="Aspirants">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Selección</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Prográmate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Selección</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Resultados</span>
                </div>
            </div>
            <div className="table mt-4">
                <Tablita key={rows.length} rows={rows} />
            </div>
        </div>
    );
};

export default SelectionResults;
