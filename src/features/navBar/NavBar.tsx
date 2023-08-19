import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" grid h-full max-w-sm grid-cols-2 mx-auto font-semibold ">
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          [
            " inline-flex flex-col items-center justify-center group md:flex-row md:items-end",
            isActive ? "text-black" : "text-white",
          ].join(" ")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mt-3 mb-1  group-hover:text-zinc-400 md:hidden"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm  group-hover:text-zinc-400 md:text-lg">
          Contact
        </span>
      </NavLink>
      <NavLink
        to="/charts-maps"
        className={({ isActive }) =>
          [
            " inline-flex flex-col items-center justify-center group md:flex-row md:items-end",
            isActive ? "text-black" : "text-white",
          ].join(" ")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mt-3 mb-1  group-hover:text-zinc-400 md:hidden"
        >
          <path
            fillRule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm  group-hover:text-zinc-400 md:text-lg">
          Chart and Maps
        </span>
      </NavLink>
    </div>
  );
};

export default NavBar;
