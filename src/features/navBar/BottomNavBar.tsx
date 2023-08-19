import React from "react";
import NavBar from "./NavBar";

const BottomNavBar = () => {
  return (
    <div className="relative ">
      <div
        className="md:hidden fixed bottom-0 
      left-0 
      z-50 
      w-full 
      h-18 
      bg-white 
      border-t border-gray-100  
      bg-gradient-to-r from-emerald-500 to-emerald-900"
      >
        <NavBar />
      </div>
    </div>
  );
};

export default BottomNavBar;
