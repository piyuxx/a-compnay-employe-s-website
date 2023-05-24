import covidAPI from "./covidAPI";
import { AllCasesAdapter } from "../adapters";

const adapter = new AllCasesAdapter();

const allCases = async () => {
  try {
    const { data } = await covidAPI("/all");
    return adapter.getParseResponse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default allCases;
