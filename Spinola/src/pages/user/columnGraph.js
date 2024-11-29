import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const getBarChartConfig = (data, labels) => ({
  type: 'bar',
  data: {
    label: '', 
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          '#000',
        ],
        borderColor: [
            '#000',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});
