import { Doughnut } from "react-chartjs-2";
import { CityAndLatestData } from "../../features/api/interfaces";
import { useDoughnutChartOptions } from "./useDoughnutChartOptions";
import { useContext } from "react";
import { darkModeContext } from "../../App";

export interface DoughnutChartProps {
  title: string;
  data: CityAndLatestData[];
}

export const DoughnutChart = (props: DoughnutChartProps) => {
  const isDarkMode = useContext(darkModeContext);

  const { options, doughnutData } = useDoughnutChartOptions({
    data: props.data,
    title: props.title,
    isDarkMode,
  });
  return (
    <div className="sm:h-[100px] md:h-[150px] lg:h-[260px] mx-20 pr-20 relative">
      <Doughnut data={doughnutData} options={options} />
      <div className="absolute top-5 right-0 h-full w-0.5 bg-gray-400 opacity-50 ml-7"></div>
    </div>
  );
};
