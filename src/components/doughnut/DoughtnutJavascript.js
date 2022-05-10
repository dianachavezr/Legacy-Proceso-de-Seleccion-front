import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, defaults } from "react-chartjs-2";
import"./Doughtnut.css";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const DoughtnutJavascript = ({ item }) => {
    let { javascriptScore } = item;
    javascriptScore = javascriptScore === 1 ? 100 : javascriptScore
    const js = javascriptScore === 100 ? 100 : javascriptScore.toString().slice(2)

    let pendiente = 100 - js;

    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${js}`, `${pendiente}`],
                backgroundColor: ["#FFCC02", "#D7D7D7"],
                hoverBackgroundColor: ["#FFCC02", "#D7D7D7"],
            },
        ],
        labels: ["Progreso", "Pendiente"],
    };
    const options = {
        maintainAspectRatio: true,
        responsive: false,
        plugins: {
            datalabels: {
                color: "#ffffff",
                formatter: function (value, context) {
                    return Math.round(value) + "%";
                },
            },
        },
    };

    return (
        <div className="graph mt-2">
            <Doughnut data={data} options={options} width={400} height={250} />
        </div>
    );
};

export default DoughtnutJavascript;
