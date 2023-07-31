import {
  useGetCitiesAndPopulationQuery,
  useGetCountryCapitalQuery,
  useGetCountryCurrencyQuery,
} from "../../features/api/apiSlice";
import { Spinner } from "../Spinner/Sppiner";
import { LineChart } from "../LineChart/LineChart";
import { DoughnutChart } from "../DoughnutChart/DoughnutChart";
import { useGetLineChartData } from "../../hooks/useGetLineChartData";
import { useContext, useMemo } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { countryContext } from "./Table";
import { DeleteButton } from "../DeleteButton/DeleteButton";

interface TableRowProps {
  name: string;
}

export const TableRowExpanded = (props: TableRowProps) => {
  const { data: capital, isError: isCapitalError } = useGetCountryCapitalQuery(
    props.name
  );
  const { data: currency, isError: isCurrencyError } =
    useGetCountryCurrencyQuery(props.name);
  const {
    data: doughnutData,
    isLoading,
    isError: isDoughnutError,
  } = useGetCitiesAndPopulationQuery(props.name);
  const data = useContext(countryContext);

  const {
    chartData,
    comparisonList,
    countriesList,
    removeComparison,
    handleSetCurrentName,
  } = useGetLineChartData(data);
  useMemo(() => {
    handleSetCurrentName(props.name);
  }, []);

  return (
    <tr className="bg-slate-300 dark:bg-slate-500 rounded-lg h-[300px] cursor-pointer pt-0 relative">
      <td colSpan={3} className="text-left pl-5 rounded-b-lg">
        <div className="absolute bg-slate-300 dark:bg-slate-500 w-full top-[-5px] right-[0px] h-2"></div>
        {isLoading ? (
          <div className="my-10 grid place-items-center">
            <Spinner />
          </div>
        ) : isCapitalError ||
          isCurrencyError ||
          isDoughnutError ||
          !doughnutData?.length ||
          !chartData.length ? (
          <div className="text-3xl text-red-500 grid place-items-center">
            Failed to load data
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex">
              <div>
                <DoughnutChart
                  data={doughnutData}
                  title="Latest city population Data"
                />
              </div>
              <div className="">
                <LineChart
                  data={chartData}
                  title={`Population of ${props.name} throughout the years`}
                />
              </div>
              <div className="ml-5">
                <div>
                  <div className="mb-2 text-sm font-bold text-black dark:text-white opacity-60 pt-1">
                    Add comparison:
                  </div>
                  {comparisonList.length < 7 && (
                    <Dropdown
                      name={props.name}
                      handleSetCurrentName={handleSetCurrentName}
                      data={countriesList ?? []}
                    />
                  )}
                </div>
                <div>
                  {comparisonList.map(
                    (comparison) =>
                      comparison !== props.name && (
                        <DeleteButton
                          key={comparison}
                          onClick={removeComparison}
                          name={comparison}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="flex ml-10 py-2 text-sm font-bold text-gray-500 dark:text-gray-200">
              <div>Capital: {capital}</div>
              <div className="ml-5">Currency: {currency}</div>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};
