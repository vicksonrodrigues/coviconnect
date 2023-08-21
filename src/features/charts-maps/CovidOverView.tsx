import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getWorldCovidCases } from "./request";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CovidOverView = () => {
  const covidOverview = useQuery({
    queryKey: ["Covid OverView"],
    queryFn: getWorldCovidCases,
  });

  if (covidOverview.isLoading) {
    return <div>loading data...</div>;
  }

  const properties = [
    { name: "cases", key: "casesPerOneMillion" },
    { name: "deaths", key: "deathsPerOneMillion" },
    { name: "recovered", key: "recoveredPerOneMillion" },
    { name: "active", key: "activePerOneMillion" },
    { name: "critical", key: "criticalPerOneMillion" },
  ];

  const selectedData = properties.map((property) => ({
    name: property.name,
    value: covidOverview.data[property.key],
  }));

  return (
    <div className="w-full ">
      <div className=" px-5 h-16 flex items-center justify-center">
        <div className="text-xl  text-black font-bold ">Covid-19 Overview</div>
      </div>
      <div className="flex border-4 items-center justify-center mx-2 bg-purple-100 rounded-xl border-green-400">
        <div className=" w-screen h-full grid md:grid-cols-2 md:divide-x-4 divide-y-4 ">
          <div className=" rounded-xl m-2 flex">
            <table className="w-full text-sm text-left text-gray-500">
              <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white border-b-2">
                Current Covid-19 Status
              </caption>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 whitespace-nowrap font-bold"
                  >
                    Total Cases
                  </th>
                  <td className="px-6 py-4">{covidOverview.data.cases}</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    Total Deaths
                  </th>
                  <td className="px-6 py-4">{covidOverview.data.deaths}</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    Total Recovered
                  </th>
                  <td className="px-6 py-4">{covidOverview.data.recovered}</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    Active Cases
                  </th>
                  <td className="px-6 py-4">{covidOverview.data.active}</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    Critical Cases
                  </th>
                  <td className="px-6 py-4">{covidOverview.data.critical}</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    Total Test Conducted
                  </th>
                  <td className="px-6 py-4">{covidOverview.data.tests}</td>
                </tr>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    Affected Countries
                  </th>
                  <td className="px-6 py-4">
                    {covidOverview.data.affectedCountries}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col w-full  ">
            <div className="p-5 text-lg font-semibold text-left text-gray-900 border-b-2">
              Covid-19 Status
              <div className="text-gray-400"> per one million </div>
            </div>
            <div className="block h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={selectedData}
                  margin={{
                    top: 30,
                    right: 30,
                    left: 30,
                    bottom: 30,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis
                    label={{
                      value: "per one Million",
                      angle: -90,
                      position: "left",
                    }}
                  />
                  <Tooltip />

                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidOverView;
