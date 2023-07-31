import { useMemo, useState } from "react";
import { useGetCountryPopulationQuery } from "../features/api/apiSlice";
import {
  CountriesFlag,
  PupolationResponseTransformed,
} from "../features/api/interfaces";

export const useGetLineChartData = (countryData?: CountriesFlag[]) => {
  const [chartData, setChartData] = useState<PupolationResponseTransformed[]>(
    []
  );
  const [currentName, setCurrentName] = useState<string>();
  const [countriesList, setCountrieslist] = useState<string[]>();
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const { data, isError: isLineChartError } = useGetCountryPopulationQuery(
    currentName ?? "",
    {
      skip: !currentName,
    }
  );

  useMemo(() => {
    if (!countryData) return;
    setCountrieslist(
      countryData
        .map((item) => item.name)
        .filter((el) => !comparisonList.includes(el))
    );
  }, [countryData, comparisonList]);

  useMemo(() => {
    if (!currentName) return;
    if (!isLineChartError)
      setComparisonList((prevData) => [...prevData, currentName]);
    else
      setComparisonList((prevData) => [
        ...prevData,
        `${currentName} - no data`,
      ]);
  }, [currentName]);

  useMemo(() => {
    if (!data) return;
    setChartData((prevData) => [...prevData, data]);
  }, [data]);

  const handleSetCurrentName = (name: string) => {
    setCurrentName(name);
  };

  const removeComparison = (fillteredName: string) => {
    setChartData(chartData.filter((el) => el.name !== fillteredName));
    setComparisonList(comparisonList.filter((item) => item !== fillteredName));
  };

  return {
    chartData,
    comparisonList,
    countriesList,
    isLineChartError,
    removeComparison,
    handleSetCurrentName,
  };
};
