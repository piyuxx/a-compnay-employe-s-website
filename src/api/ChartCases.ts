import covidAPI from "./covidAPI";
import { HistoricalCasesAdapter } from "../adapters";

const adapter = new HistoricalCasesAdapter();
const historicalCases = async () => {
  try {
    const { data } = await covidAPI("/historical/all?lastdays=all");
    return adapter.getParseResponse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default historicalCases;
