import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, defaults } from "react-chartjs-2";
import "./Doughtnut.css";
//import "chart.piecelabel.js";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const DoughtnutHtml = ({ item }) => {
    let { htmlScore } = item;
    htmlScore = htmlScore === 1 ? 100 : htmlScore
    const html = htmlScore === 100 ? 100 : htmlScore.toString().slice(2)

    let pendiente = 100 - html;
    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${html}`, `${pendiente}`],
                backgroundColor: ["#FF6384", "#D7D7D7"],
                hoverBackgroundColor: ["#FF6384", "#D7D7D7"],
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

export default DoughtnutHtml;
