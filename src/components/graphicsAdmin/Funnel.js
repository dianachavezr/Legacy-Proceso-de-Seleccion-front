import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

/*Chart.register(ChartDataLabels);
Chart.defaults.plugins.data;
defaults.plugins. = "bottom";

const barChartData: Chart.ChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Male",
            stack: "Stack 0",
            backgroundColor: "#d41111",
            data: [10, 20, 30, 40, 50, 60],
        },
        {
            label: "Female",
            stack: "Stack 0",
            backgroundColor: "#3765b0",
            data: [10, 15, 30, 60, 50].map((k) => -k),
        },
    ],
};*/

const Funnel = () => {
    /*  const canvasRef = useRef(null);
    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
                type: "horizontalBar",
                data: barChartData,
                options: {
                    title: {
                        display: true,
                        text: "Chart.js Bar Chart - Stacked",
                    },
                    tooltips: {
                        intersect: false,
                        callbacks: {
                            label: (c) => {
                                const value = Number(c.value);
                                const positiveOnly = value < 0 ? -value : value;
                                let retStr = "";
                                if (c.datasetIndex === 0) {
                                    retStr += `Male: ${positiveOnly.toString()}`;
                                } else {
                                    retStr += `Female: ${positiveOnly.toString()}`;
                                }
                                return retStr;
                            },
                        },
                    },
                    responsive: true,
                    legend: {
                        position: "bottom",
                    },
                    scales: {
                        xAxes: [
                            {
                                stacked: false,
                                ticks: {
                                    beginAtZero: true,
                                    callback: (v) => {
                                        return v < 0 ? -v : v;
                                    },
                                },
                            },
                        ],
                        yAxes: [
                            {
                                stacked: true,
                                ticks: {
                                    beginAtZero: true,
                                },
                                position: "left",
                            },
                        ],
                    },
                },
            });
        }
    }, []);
*/ return (
        <div>
            <p>texto</p>
        </div>
    );
};

export default Funnel;
