import { Line } from "react-chartjs-2";
import { useLineChartOptions } from "./useLineChartOptions";
import { PupolationResponseTransformed } from "../../features/api/interfaces";
import { useContext } from "react";
import { darkModeContext } from "../../App";

export interface LineChartProps {
  data: PupolationResponseTransformed[];
  title: string;
}

export const LineChart = (props: LineChartProps) => {
  const isDarkMode = useContext(darkModeContext);

  const { chartData, options } = useLineChartOptions({
    data: props.data,
    title: props.title,
    isDarkMode,
  });

  return (
    <div className="md:w-[400px] sm:w-[200px] lg:w-[600px] h-[300px]">
      <Line options={options} data={chartData} />
    </div>
  );
};
