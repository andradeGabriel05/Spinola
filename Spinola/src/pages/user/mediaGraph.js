import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export const getPieConfig = (data, labels) => ({
  type: 'pie',
  data: {
    labels: labels,
    datasets: [
      {
        data,
        backgroundColor: ['#1b3370', '#d3d3d3', '#c33'],
        hoverBackgroundColor: ['#1b3370', '#d3d3d3', '#c33'],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});