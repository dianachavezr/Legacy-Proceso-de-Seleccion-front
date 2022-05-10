import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { providerContext } from "../../Context/status";

const AmountPassing = ({ item }) => {

    const { usersRegisted } = item
    const { getAcept, acept, profiles } = useContext(providerContext);
    let entrevist = 0
    useEffect(() => {
        getAcept()
    }, [])
    let acepts = []
    for (let i of usersRegisted) {
        if (acept[0] !== undefined) {
            for (let j of acept) {
                if (j.rol === 0) {
                    let id = j.id
                    if (i === id) {
                        acepts = [...acepts, j.id]
                    }
                }
            }
        }
    }
    for (let i of usersRegisted) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.fechaEntrevista !== undefined) {
                    entrevist += 1
                }
            }
        }
    }
    let cien = usersRegisted.length > 0 ? cien = 100 : cien = 0;
    let total = acepts.length * 100 / usersRegisted.length
    let entreV = entrevist * 100 / usersRegisted.length


    const dataBar = {
        labels: ["Inscritos", "Entrevista", "Aceptados"],
        datasets: [
            {
                label: "proceso de selección",
                backgroundColor: [
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderColor: [
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderWidth: 1,
                hoverBackgroundColor: [
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                hoverBorderColor: "rgba(255, 205, 86)",
                data: [`${cien}`, `${entreV}`, `${total}`],
            },
        ],
    };
    const options = {
        maintainAspectRatio: true,
        responsive: false,
        plugins: {
            datalabels: {
                color: "#6c757d",
                formatter: function (value, context) {
                    return Math.round(value) + "%";
                },
            },
        },
    };

    return (
        <div>
            <Bar data={dataBar} options={options} width={400} height={200} />
        </div>
    );
};

export default AmountPassing;