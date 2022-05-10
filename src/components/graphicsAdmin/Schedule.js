import React from "react";
import { Bar } from "react-chartjs-2";


const Funnel = () => {

    const dataBar = {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        datasets: [
            {
                label: "Dias de agenda",
                data: [1, 1, 1, 2, 3, 4],
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
                borderWidth: 1
            },
        ],
    };


    return (
        <div className="graph mt-2">
            <Bar data={dataBar} width={400} height={200} />
        </div>
    );
};


export default Funnel;
