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
      text: "Movie Data By Genres",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Movies",
      data: [1, 2, 3, 4, 5, 6, 7, 8,9],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const VerticalBar = (props) => {
  return <Bar options={options} data={data} />;
};


export default VerticalBar