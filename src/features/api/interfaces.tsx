export interface CountriesFlag {
  flag: string;
  iso2: string;
  iso3: string;
  name: string;
}

export interface PopulationData {
  year: number;
  value: number;
}

export interface CountryPopulation {
  error: boolean;
  msg: string;
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationData[];
  };
}

export interface PupolationResponseTransformed {
  name: string;
  populationData: PopulationData[];
}

export interface CityPopulation {
  reliabilty: string;
  sex: string;
  value: string;
  year: string;
}

export interface CitiesAndPopulations {
  city: string;
  country: string;
  populationCounts: CityPopulation[];
}

export interface CityAndLatestData {
  city: string;
  value: number;
}

export interface CountryCapitalResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    iso2: string;
    iso3: string;
    capital: string;
  };
}

export interface CountryCurrencyResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    iso2: string;
    iso3: string;
    currency: string;
  };
}
