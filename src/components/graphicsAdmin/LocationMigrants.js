import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { providerContext } from "../../Context/status";



const LocationMigrants = ({ item }) => {
    const { profiles } = useContext(providerContext)
    const { usersRegisted } = item;
    let amazonas = 0; let antioquia = 0; let arauca = 0; let atlántico = 0; let bolívar = 0; let boyacá = 0; let caldas = 0; let caquetá = 0; let casanare = 0; let cauca = 0; let cesar = 0; let chocó = 0; let córdoba = 0; let cundinamarca = 0; let guainía = 0; let guaviare = 0; let huila = 0; let laGuajira = 0; let magdalena = 0; let meta = 0; let nariño = 0; let norteDeSantander = 0; let putumayo = 0; let quindío = 0; let risaralda = 0; let sanAndrésYProvidencia = 0; let santander = 0; let tolima = 0; let valleDelCauca = 0; let vaupés = 0; let vichada = 0

    for (let i of usersRegisted) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.residencyDepartment === "Amazonas") {
                    amazonas += 1
                }
                else if (j.residencyDepartment === "Antioquia") {
                    antioquia = 1
                }
                else if (j.residencyDepartment === "Arauca") {
                    arauca += 1
                }
                else if (j.residencyDepartment === "Atlántico") {
                    atlántico += 1
                }
                else if (j.residencyDepartment === "Bolívar") {
                    bolívar += 1
                }
                else if (j.residencyDepartment === "Boyacá") {
                    boyacá += 1
                }
                else if (j.residencyDepartment === "Caldas") {
                    caldas += 1
                }
                else if (j.residencyDepartment === "Caquetá") {
                    caquetá += 1
                }
                else if (j.residencyDepartment === "Casanare") {
                    casanare += 1
                }
                else if (j.residencyDepartment === "Cauca") {
                    cauca += 1
                }
                else if (j.residencyDepartment === "Cesar") {
                    cesar += 1
                }
                else if (j.residencyDepartment === "Chocó") {
                    chocó += 1
                }
                else if (j.residencyDepartment === "Córdoba") {
                    córdoba += 1
                }
                else if (j.residencyDepartment === "Cundinamarca") {
                    cundinamarca += 1
                }
                else if (j.residencyDepartment === "Guainía") {
                    guainía += 1
                }
                else if (j.residencyDepartment === "Guaviare") {
                    guaviare += 1
                }
                else if (j.residencyDepartment === "Huila") {
                    huila += 1
                }
                else if (j.residencyDepartment === "La Guajira") {
                    laGuajira += 1
                }
                else if (j.residencyDepartment === "Magdalena") {
                    magdalena += 1
                }
                else if (j.residencyDepartment === "Meta") {
                    meta += 1
                }
                else if (j.residencyDepartment === "Nariño") {
                    nariño += 1
                }
                else if (j.residencyDepartment === "Norte de Santander") {
                    norteDeSantander += 1
                }
                else if (j.residencyDepartment === "Putumayo") {
                    putumayo += 1
                }
                else if (j.residencyDepartment === "Quindío") {
                    quindío += 1
                }
                else if (j.residencyDepartment === "Risaralda") {
                    risaralda += 1
                }
                else if (j.residencyDepartment === "San Andrés y Providencia") {
                    sanAndrésYProvidencia += 1
                }
                else if (j.residencyDepartment === "Santander") {
                    santander += 1
                }
                else if (j.residencyDepartment === "Tolima") {
                    tolima += 1
                }
                else if (j.residencyDepartment === "Valle del Cauca") {
                    valleDelCauca += 1
                }
                else if (j.residencyDepartment === "Vaupés") {
                    vaupés += 1
                }
                else if (j.residencyDepartment === "Vichada") {
                    vichada += 1
                }
            }
        }
    }

    const dataBar = {
        labels: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"],
        datasets: [
            {
                axis: "y",
                label: "Departamentos",
                borderWidth: 1,
                backgroundColor: [
                    /*Red*/'rgba(255, 99, 132)',
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderColor: [
                    /*Red*/'rgba(255, 99, 132)',
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                data: [`${amazonas}`, `${antioquia}`, `${arauca}`, `${atlántico}`, `${bolívar}`, `${boyacá}`, `${caldas}`, `${caquetá}`, `${casanare}`, `${cauca}`, `${cesar}`, `${chocó}`, `${córdoba}`, `${cundinamarca}`, `${guainía}`, `${guaviare}`, `${huila}`, `${laGuajira}`, `${magdalena}`, `${meta}`, `${nariño}`, `${norteDeSantander}`, `${putumayo}`, `${quindío}`, `${risaralda}`, `${sanAndrésYProvidencia}`, `${santander}`, `${tolima}`, `${valleDelCauca}`, `${vaupés}`, `${vichada}`],
            },
        ],
    };

    const options = {
        indexAxis: "y",
    };

    return (
        <div className="graph mt-2">
            <Bar data={dataBar} options={options} width={300} height={500} />
        </div>
    );
};

export default LocationMigrants;