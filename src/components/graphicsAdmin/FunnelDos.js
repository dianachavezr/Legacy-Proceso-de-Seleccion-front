import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { providerContext } from "../../Context/status";

const FunnelDos = ({ item }) => {
    const { getAcept, acept, profiles } = useContext(providerContext);
    const { usersRegisted } = item;
    const items = usersRegisted
    useEffect(() => {
        getAcept()
    }, [])
    let acepts = [];
    let entrevist = []
    let aceptMen = 0
    let aceptMale = 0
    let regisMen = 0
    let regisMale = 0
    let entreMen = 0
    let entreMale = 0

    //acept of the candidate
    for (let i of items) {
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
    for (let i of acepts) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.sex === "masculino") {
                    aceptMen += 1
                } else if (j.sex === "femenino")
                    aceptMale += 1
            }
        }
    }
    // candidate of entrevist 
    for (let i of usersRegisted) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.fechaEntrevista !== undefined) {
                    entrevist = [...entrevist, j.user_id]
                }
            }
        }
    }
    for (let i of entrevist) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.sex === "masculino") {
                    entreMen += 1
                } else if (j.sex === "femenino")
                    entreMale += 1
            }
        }
    }
    //Acepts male o men
    for (let i of usersRegisted) {
        for (let j of profiles) {
            console.log('J',j.user_id)
            console.log('I',i)
            if (j.user_id === i) {
                if (j.sex === "masculino") {
                    regisMen += 1
                } else if (j.sex === "femenino")
                    regisMale += 1
            }
        }
    }
    const dataBar = {
        labels: ["Inscritos", "Entrevista", "Aceptados"],
        datasets: [
            {
                label: "Hombres",
                backgroundColor: [
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderColor: [

                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(54, 162, 235)",
                hoverBorderColor: "rgba(54, 162, 235)",
                data: [`${regisMen}`, `${entreMen}`, `${aceptMen}`],
            },
            {
                label: "Mujeres",
                backgroundColor: [
                    /*Red*/'rgba(255, 99, 132)',
                ],
                borderColor: [
                    /*Red*/'rgba(255, 99, 132)',

                ],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255, 99, 132)",
                hoverBorderColor: "rgba(255, 99, 132)",
                data: [`${regisMale}`, `${entreMale}`, `${aceptMale}`],
            },
        ],
    };
    return (
        <div>
            <Bar data={dataBar} width={400} height={200} />
        </div>
    );
};

export default FunnelDos;


// import React from "react";
// import { Bar } from "react-chartjs-2";

// const FunnelDos = () => {
//     const dataBar = {
//         labels: ["Inscritos", "Prueba", "Entrevista", "Aceptados"],
//         datasets: [
//             {
//                 label: "Hombres",
//                 backgroundColor: "#EC932F",
//                 borderColor: "rgba(255,99,132,1)",
//                 borderWidth: 1,
//                 hoverBackgroundColor: "rgba(255,99,132,0.4)",
//                 hoverBorderColor: "rgba(255,99,132,1)",
//                 data: [65, 59, 80, 81],
//             },
//             {
//                 label: "Mujeres",
//                 backgroundColor: "rgba(255,99,132,0.2)",
//                 borderColor: "rgba(255,99,132,1)",
//                 borderWidth: 1,
//                 hoverBackgroundColor: "rgba(255,99,132,0.4)",
//                 hoverBorderColor: "rgba(255,99,132,1)",
//                 data: [65, 59, 80, 81],
//             },
//         ],
//     };
//     return (
//         <div>
//             <Bar data={dataBar} width={400} height={200} />
//         </div>
//     );
// };

// export default FunnelDos;
