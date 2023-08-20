import React, { useState } from "react";
import { ContactModel } from "./contactSlice";
import { Link, NavLink } from "react-router-dom";
import { ContactDetailsForm } from "./ContactDetails";

const SingleContact = ({ contact }: { contact: ContactModel }) => {
  const [openMobile, setOpenMobile] = useState(false);

  /* const handleDesktopDetails = () => {}; */

  const handleMobileDetails = () => {
    setOpenMobile(!openMobile);
  };

  return (
    <>
      <div
        className={` inline-flex items-center justify-between p-4 w-full border border-gray-300 font-semibold text-gray-800 shadow-lg ${
          openMobile ? `rounded-t-lg mb-0 ` : `mb-4 rounded-lg`
        }`}
      >
        {/* Contact Name */}
        <div className="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
          <div className=" pl-2 text-lg">
            <span className="pr-2">{contact.firstName}</span>
            <span>{contact.lastName}</span>
          </div>
        </div>
        {/* Desktop Button */}
        <Link to={`${contact.id}`}>
          <button className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm  px-5 ">
            View Details
          </button>
        </Link>
        {/* Mobile Button */}
        <button onClick={handleMobileDetails} className="md:hidden ">
          {!openMobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`mb-4 w-full border-x border-b border-gray-300 font-semibold text-gray-800 rounded-b-lg  ${
          openMobile ? "flex" : "hidden"
        }`}
      >
        <ContactDetailsForm contact={contact} />
      </div>
    </>
  );
};

export default SingleContact;
