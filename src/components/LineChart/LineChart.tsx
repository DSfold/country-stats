import { Line } from "react-chartjs-2";
import { useLineChartOptions } from "./useLineChartOptions";
import { useContext } from "react";
import { darkModeContext } from "@src/App";
import { PupolationResponseTransformed } from "@src/features/api/interfaces";

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
