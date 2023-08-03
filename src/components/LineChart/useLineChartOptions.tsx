import { PupolationResponseTransformed } from "@src/features/api/interfaces";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";

export interface useLineChartOptionsProps {
  title: string;
  data: PupolationResponseTransformed[];
  isDarkMode: boolean;
}

export const useLineChartOptions = (props: useLineChartOptionsProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
  );

  const labels = props.data[0].populationData.map((el) => el.year.toString());
  const chartData = {
    labels,
    datasets: props.data.map((el) => {
      return {
        label: el.name,
        data: el.populationData.map((item) => item.value),
      };
    }),
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: props.isDarkMode ? "rgba(255,255,255, 0.9)" : "black",
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: props.isDarkMode ? "rgba(255,255,255, 0.9)" : "black",
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: props.isDarkMode ? "rgba(255,255,255, 0.9)" : "black",
        },
        position: "bottom" as const,
      },
      colors: {
        enabled: true,
        forceOverride: true,
      },
      title: {
        display: true,
        text: props.title,
        color: props.isDarkMode ? "rgba(255,255,255, 0.9)" : "black",
      },
    },
  };

  return { options, chartData };
};
