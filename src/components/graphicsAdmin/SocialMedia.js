import React, { useContext } from "react";
import { Chart } from "chart.js";
//import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

import { providerContext } from "../../Context/status";
//import "chart.piecelabel.js";

const SocialMedia = ({ item }) => {
    const { profiles } = useContext(providerContext);
    const { usersRegisted } = item
    let web = 0
    let recommendation = 0
    let facebook = 0
    let instagram = 0
    let google = 0
    let compensar = 0
    let allianceEducational = 0
    let embassyVen = 0
    let poliTec = 0
    let PNUD = 0
    let other = 0
    for (let i of usersRegisted) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.heardFromUs !== undefined) {

                    if (j.heardFromUs.web === true) {
                        web += 1
                    } else if (j.heardFromUs.recommendation === true) {
                        recommendation += 1
                    } else if (j.heardFromUs.instagram === true) {
                        instagram += 1
                    } else if (j.heardFromUs.facebook === true) {
                        facebook += 1
                    } else if (j.heardFromUs.google === true) {
                        google += 1
                    } else if (j.heardFromUs.compensar === true) {
                        compensar += 1
                    } else if (j.heardFromUs.allianceEducational === true) {
                        allianceEducational += 1
                    } else if (j.heardFromUs.embassyVen === true) {
                        embassyVen += 1
                    } else if (j.heardFromUs.poliTec === true) {
                        poliTec += 1
                    } else if (j.heardFromUs.PNUD === true) {
                        PNUD += 1
                    } else if (j.heardFromUs.other === true) {
                        other += 1
                    }
                }

            }
        }
    }
    const data = {
        labels: [
            "Página web Educamás",
            "Recomendación de un amigo",
            "Facebook",
            "Instagram",
            "Google",
            "Compensar",
            "Alianza educativa",
            "Embajada de venezuela",
            "Politécnico Internacional",
            "PNUD",
            "Otro",
        ],
        datasets: [
            {
                axis: "y",
                label: "Redes sociales",
                data: [`${web}`, `${recommendation}`, `${facebook}`, `${instagram}`, `${google}`, `${compensar}`, `${allianceEducational}`, `${embassyVen}`, `${poliTec}`, `${PNUD}`, `${other}`],
                fill: false,
                backgroundColor: [
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                ],
                borderColor: [
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        indexAxis: "y",
    };
    return (
        <div>
            <div className="graph mt-2">
                <Bar data={data} options={options} width={400} height={400} />
            </div>
        </div>
    );
};

export default SocialMedia;