import covidAPI from "./covidAPI";
import { CountryCasesAdapter } from "../adapters";

const adapter = new CountryCasesAdapter();
const countryCases = async () => {
  try {
    const { data } = await covidAPI("/countries");
    return adapter.getParseResponse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default countryCases;
