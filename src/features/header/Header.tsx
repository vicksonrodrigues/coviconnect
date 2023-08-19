import React from "react";
import NavBar from "../navBar/NavBar";

const Header = () => {
  return (
    <header className="  block md:flex  bg-gradient-to-r from-emerald-500 to-emerald-900 p-4 sticky top-0 border-b border-gray-200 ">
      <div className=" text-4xl font-bold tracking-tight text-white text-center md:text-left  ">
        CoviConnect
      </div>
      <div className=" hidden md:flex ml-6 items-end">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

/* <Link to="/contact">
  <span className=" text-xl text-white hover:text-zinc-400  px-4">
    Contact
  </span>
</Link>
<Link to="/charts-maps">
  <span className="text-xl text-white hover:text-zinc-400 px-4">
    Charts and Maps
  </span>
</Link> */
