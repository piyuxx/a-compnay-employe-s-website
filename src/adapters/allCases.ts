import { IAllCases } from "./types";

class AllCasesAdapter {
  private parseResponse = (apiResponse: IAllCases): IAllCases => {
    return {
      cases: apiResponse.cases,
      todayCases: apiResponse.todayCases,
      deaths: apiResponse.deaths,
      todayDeaths: apiResponse.todayDeaths,
      recovered: apiResponse.recovered,
      todayRecovered: apiResponse.todayRecovered,
      active: apiResponse.active,
      critical: apiResponse.critical,
      tests: apiResponse.tests,
      population: apiResponse.population,
    };
  };

  getParseResponse = (apiResponse: IAllCases) =>
    this.parseResponse(apiResponse);
}

export default AllCasesAdapter;
