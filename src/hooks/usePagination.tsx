import { useEffect, useState } from "react";

export const usePagination = () => {
  const [take, setTake] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSetTake = (takeValue: number) => {
    setTake(takeValue);
  };

  const handleSetSkip = (skipValue: number) => {
    setSkip(skipValue);
  };

  const handleSetTotalPages = (take: number, totalDataAmount: number) => {
    setTotalPages(Math.ceil(totalDataAmount / take));
  };

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!skip) return setCurrentPage(1);
    setCurrentPage(skip / take + 1);
  }, [skip, take]);

  return {
    take,
    skip,
    totalPages,
    currentPage,
    searchValue,
    handleSetSkip,
    handleSetTake,
    handleSetTotalPages,
    handleSetSearchValue,
  };
};
