import { useGetCountriesFlagsQuery } from "../../features/api/apiSlice";
import { CountriesFlag } from "../../features/api/interfaces";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination/Pagination";
import { Spinner } from "../Spinner/Sppiner";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { createContext, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const countryContext = createContext<CountriesFlag[] | undefined>(
  undefined
);

export const Table = () => {
  const [filteredData, setFilteredData] = useState<CountriesFlag[]>();
  const { data, isLoading } = useGetCountriesFlagsQuery();
  const {
    skip,
    take,
    totalPages,
    currentPage,
    searchValue,
    handleSetTotalPages,
    handleSetSkip,
    handleSetTake,
    handleSetSearchValue,
  } = usePagination();

  const debouncedValue = useDebounce(searchValue, 500);

  useMemo(() => {
    if (!debouncedValue) {
      const newData = data?.slice(skip, skip + take);
      return setFilteredData(newData);
    }
    const searchedValueArray = data?.filter((el) =>
      el.name.toLocaleLowerCase().includes(debouncedValue.toLocaleLowerCase())
    );
    setFilteredData(searchedValueArray);
  }, [debouncedValue, data, skip, take]);

  useMemo(() => {
    handleSetTotalPages(take, data?.length ?? 0);
  }, [take, data]);

  return (
    <countryContext.Provider value={data}>
      <div className="mx-40 mb-10 px-0 align-middle ">
        {isLoading ? (
          <Spinner />
        ) : (
          <table className="w-full px-0 border-separate border-spacing-y-1 align-middle">
            <tbody>
              <TableHeader
                searchValue={searchValue}
                handleSetSearchValue={handleSetSearchValue}
              ></TableHeader>
              {filteredData
                ? filteredData.map((el) => (
                    <TableRow flag={el.flag} name={el.name} key={el.name} />
                  ))
                : null}
            </tbody>
          </table>
        )}
        <Pagination
          totalAmount={data?.length ?? 0}
          totalPages={totalPages}
          currentPage={currentPage}
          skip={skip}
          take={take}
          handleSetSkip={handleSetSkip}
          handleSetTake={handleSetTake}
        />
      </div>
    </countryContext.Provider>
  );
};
