import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export const getRadialBarConfig = (data, labels) => ({
  type: 'doughnut', // RadialBar isn't natively supported, so we mimic it using doughnut
  data: {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ['#1b3370', '#d3d3d3'],
        hoverBackgroundColor: ['#1b3370', '#d3d3d3'],
        borderWidth: 2,
        cutout: '90%', // Creates a radial effect
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