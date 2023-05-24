import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { allCasesApi, countryCasesApi, historicalCasesApi } from "../api";
import { IAllCases, ICountryCases, IHistoricalCases } from "../adapters/types";

interface IDashboardContext {
  allCases?: IAllCases;
  countryCases?: ICountryCases;
  historicalCases?: IHistoricalCases;
  allCasesLoading: boolean;
  countryCasesLoading: boolean;
  historicalCasesLoading: boolean;
}

export const DashboardContext = createContext<IDashboardContext>({
  allCases: {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    active: 0,
    critical: 0,
    tests: 0,
    population: 0,
  },
  countryCases: {
    countryCases: [],
  },
  historicalCases: {
    cases: {},
    deaths: {},
    recovered: {},
  },
  allCasesLoading: false,
  countryCasesLoading: false,
  historicalCasesLoading: false,
});

const DashboarProvider = (props: React.PropsWithChildren<{}>) => {
  const { data: allCases, isLoading: allCasesLoading } = useQuery(
    ["allCases"],
    allCasesApi
  );
  const { data: countryCases, isLoading: countryCasesLoading } = useQuery(
    ["countryCases"],
    countryCasesApi
  );
  const { data: historicalCases, isLoading: historicalCasesLoading } = useQuery(
    ["historicalCases"],
    historicalCasesApi
  );

  return (
    <DashboardContext.Provider
      value={{
        allCases,
        countryCases,
        historicalCases,
        allCasesLoading,
        countryCasesLoading,
        historicalCasesLoading,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboarProvider;
