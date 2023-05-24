import { ICountryCases, ICountryCase } from "./types";

class CountryCasesAdapter {
  private parseResponse = (apiResponse: ICountryCase[]): ICountryCases => {
    return {
      countryCases: apiResponse.map((countryCase) => ({
        country: countryCase.country,
        countryInfo: countryCase.countryInfo,
        cases: countryCase.cases,
        todayCases: countryCase.todayCases,
        deaths: countryCase.deaths,
        todayDeaths: countryCase.todayDeaths,
        recovered: countryCase.recovered,
        todayRecovered: countryCase.todayRecovered,
        active: countryCase.active,
        critical: countryCase.critical,
        tests: countryCase.tests,
        population: countryCase.population,
        continent: countryCase.continent,
      })),
    };
  };

  getParseResponse = (apiResponse: ICountryCase[]) =>
    this.parseResponse(apiResponse);
}

export default CountryCasesAdapter;
