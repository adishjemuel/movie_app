import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Number Of Movies",
    },
  },
};

const VerticalBar = (props) => {
  const labels = props.labels.map((g) => g.type);

  const data = {
    labels,
    datasets: [
      {
        label: "Movies Count",
        data: props.labels.map((g) => g.movies_count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log(props.labels)
  return <Bar options={options} data={data} />;
};

export default VerticalBar;
