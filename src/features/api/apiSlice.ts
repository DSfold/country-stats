import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CitiesAndPopulations,
  CityAndLatestData,
  CountriesFlag,
  CountryCapitalResponse,
  CountryCurrencyResponse,
  CountryPopulation,
  PupolationResponseTransformed,
} from "./interfaces";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://countriesnow.space/api/v0.1/",
  }),
  endpoints: (builder) => ({
    getCountryPopulation: builder.query<PupolationResponseTransformed, string>({
      query: (country: string) => ({
        url: "/countries/population",
        body: { country: country },
        method: "POST",
      }),
      transformResponse: (rawResult: CountryPopulation) => {
        return {
          name: rawResult.data.country,
          populationData: rawResult.data.populationCounts,
        };
      },
    }),
    getCitiesAndPopulation: builder.query<CityAndLatestData[], string>({
      query: (country: string) => ({
        url: "/countries/population/cities/filter",
        body: { country: country, order: "asc", orderBy: "name" },
        method: "POST",
      }),
      transformResponse: (rawResult: {
        error: boolean;
        msg: string;
        data: CitiesAndPopulations[];
      }) => {
        return rawResult.data.map((el) => {
          return { city: el.city, value: Number(el.populationCounts[0].value) };
        });
      },
    }),
    getCountryCapital: builder.query<string, string>({
      query: (country: string) => ({
        url: "/countries/capital",
        body: { country: country },
        method: "POST",
      }),
      transformResponse: (rawResult: CountryCapitalResponse) => {
        return rawResult.data.capital;
      },
    }),
    getCountryCurrency: builder.query<string, string>({
      query: (country: string) => ({
        url: "/countries/currency",
        body: { country: country },
        method: "POST",
      }),
      transformResponse: (rawResult: CountryCurrencyResponse) => {
        return rawResult.data.currency;
      },
    }),
    getCountriesFlags: builder.query<CountriesFlag[], void>({
      query: () => "/countries/flag/images",
      transformResponse: (rawResult: {
        data: CountriesFlag[];
        msg: string;
        error: boolean;
      }) => {
        return rawResult.data;
      },
    }),
  }),
});

export const {
  useGetCountriesFlagsQuery,
  useGetCountryPopulationQuery,
  useGetCitiesAndPopulationQuery,
  useGetCountryCapitalQuery,
  useGetCountryCurrencyQuery,
} = apiSlice;
