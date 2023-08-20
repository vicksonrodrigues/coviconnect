import axios from "axios";

export const getWorldCovidCases = () =>
  axios.get("https://disease.sh/v3/covid-19/all").then((res) => res.data);

export const getCountryCovidCases = () =>
  axios.get("https://disease.sh/v3/covid-19/countries").then((res) => res.data);

export const getCovidCasesByDate = () =>
  axios
    .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    .then((res) => res.data);
