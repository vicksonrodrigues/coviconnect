import React from "react";
import CovidLineGraph from "./CovidLineGraph";
import CovidOverView from "./CovidOverView";
import CovidMap from "./CovidMap";

const ChartsMaps = () => {
  return (
    <div className=" w-full mb-16">
      <div className="bg-lime-200 shadow-md px-5 h-16 flex items-center justify-center">
        <div className="text-2xl  text-black font-bold ">Covid Trackers</div>
      </div>
      <CovidOverView />
      <CovidLineGraph />
      <CovidMap />
    </div>
  );
};

export default ChartsMaps;
