import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { CityAndLatestData } from "../../features/api/interfaces";

export interface useDoughnutChartOptionsProps {
  data: CityAndLatestData[];
  title: string;
  isDarkMode: boolean;
}

export const useDoughnutChartOptions = (
  props: useDoughnutChartOptionsProps
) => {
  ChartJS.register(ArcElement, Tooltip, Legend, Colors);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "left" as const,
        padding: 20,
      },
      colors: {
        enabled: true,
      },
      title: {
        display: true,
        text: props.title,
        color: props.isDarkMode ? "rgba(255,255,255, 0.9)" : "black",
      },
    },
  };

  const doughnutData = {
    labels: props.data.map((item) => item.city),
    datasets: [
      {
        data: props.data.map((el) => el.value),
        label: "Latest data",
        borderWidth: 1,
      },
    ],
  };

  return { options, doughnutData };
};
