import React from "react";
import MapComponent from "./MapComponent";
import { useQuery } from "@tanstack/react-query";
import { getCountryCovidCases } from "./request";

const CovidMap = () => {
  const covidCountries = useQuery({
    queryKey: ["Covid Countries"],
    queryFn: getCountryCovidCases,
  });

  if (covidCountries.isLoading) {
    return <div>loading data...</div>;
  }

  const selectedData = covidCountries.data.map((country: any) => {
    return {
      country: country.country,
      lat: country.countryInfo.lat,
      long: country.countryInfo.long,
      cases: country.cases,
      active: country.active,
      recovered: country.recovered,
      deaths: country.deaths,
    };
  });
  return (
    <div className="w-full ">
      <div className=" px-5 h-16 flex items-center justify-center">
        <div className="text-xl  text-black font-bold ">Covid-19 Map View</div>
      </div>
      <div className="flex border-4 items-center justify-center mx-2 bg-purple-100 rounded-xl border-green-400 p-1">
        <MapComponent countriesData={selectedData} />
      </div>
    </div>
  );
};

export default CovidMap;
