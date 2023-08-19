import React from "react";
const NoContact = () => {
  return (
    <div className="flex flex-col text-center  place-content-center p-2 h-full">
      <div className="inline-flex mx-auto justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="mb-2 text-lg text-center">Oops! No Contact Found</span>
      </div>
      <p className="mb-2 text-sm">
        Please add Contact from Create Contact Button
      </p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
      >
        Create Contact
      </button>
    </div>
  );
};
const ContactList = () => {
  return (
    <div className="block  w-full ">
      <div className="border-4 block p-2 h-16  text-center text-2xl text-black font-bold  align-middle  bg-lime-200 shadow-md rounded-t-xl">
        Contact List
      </div>
      <div className=" border-x-4" style={{ height: "75vh" }}>
        <NoContact />
      </div>
    </div>
  );
};

export default ContactList;
