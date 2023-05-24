import { IHistoricalCases, TCases, TDeaths, TRecovered } from "./types";

type TAPIResponse = {
  cases: TCases;
  deaths: TDeaths;
  recovered: TRecovered;
};

class HistoricalCasesAdapter {
  private parseResponse = (apiResponse: TAPIResponse): IHistoricalCases => {
    return {
      cases: apiResponse.cases,
      deaths: apiResponse.deaths,
      recovered: apiResponse.recovered,
    };
  };

  getParseResponse = (apiResponse: TAPIResponse) =>
    this.parseResponse(apiResponse);
}

export default HistoricalCasesAdapter;
