import axios from "axios";

const covidAPI = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});

export default covidAPI;
