export interface TData {
  [date: string]: number;
}

export type TRecovered = TData;
export type TDeaths = TData;
export type TCases = TData;

export interface IHistoricalCases {
  cases: TCases;
  deaths: TDeaths;
  recovered: TRecovered;
}

export interface IAllCases {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
  population: number;
}

export interface ICountryCase {
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  tests: number;
  population: number;
  continent: string;
}

export interface ICountryCases {
  countryCases: ICountryCase[];
}
