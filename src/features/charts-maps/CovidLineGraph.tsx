import React from "react";
import { useQuery } from "@tanstack/react-query";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { getCovidCasesByDate } from "./request";

const CovidLineGraph = () => {
  const covidDaily = useQuery({
    queryKey: ["Daily Cases"],
    queryFn: getCovidCasesByDate,
  });

  if (covidDaily.isLoading) {
    return <div>loading data...</div>;
  }

  const splitKeyValue = (obj: {
    cases: Record<string, string>;
    recovered: Record<string, string>;
    deaths: Record<string, string>;
  }) => {
    const keys = Object.keys(obj.cases);
    const res = [];
    for (let i = 0; i < keys.length; i++) {
      res.push({
        date: keys[i],
        cases: obj.cases[keys[i]],
        recovered: obj.recovered[keys[i]],
        deaths: obj.deaths[keys[i]],
      });
    }
    return res;
  };

  const covidData = splitKeyValue(covidDaily.data);

  return (
    <div className="w-full">
      <div className=" px-5 h-16 flex items-center justify-center">
        <div className="text-xl  text-black font-bold ">Covid-19 History</div>
      </div>
      <div className="flex border-4 items-center justify-center mx-2 bg-purple-100 rounded-xl border-green-400">
        <div className="md:w-[70vw]  w-screen h-[50vh] ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={covidData}
              margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
            >
              <XAxis
                dataKey="date"
                tickFormatter={(value) =>
                  new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "numeric",
                  }).format(new Date(value))
                }
                label={{ value: "Dates", position: "bottom" }}
              />
              <YAxis
                label={{
                  value: "Number of Person",
                  angle: -90,
                  position: "left",
                }}
                tickCount={6}
                tickFormatter={(value) =>
                  new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value)
                }
              />
              <Tooltip />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#8884d8"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="deaths"
                stroke="#FF0000"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CovidLineGraph;
