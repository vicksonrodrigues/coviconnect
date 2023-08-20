import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getWorldCovidCases } from "./request";

const ChartsMaps = () => {
  const result = useQuery({
    queryKey: ["worldWideCase"],
    queryFn: getWorldCovidCases,
  });
  console.log("Result", result.data);
  return <div>ChartsMaps</div>;
};

export default ChartsMaps;
