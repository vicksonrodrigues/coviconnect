import React from "react";

const ContactDetails = () => {
  return (
    <div className=" hidden md:block w-full">
      <div className="block p-2 h-16  text-center text-2xl text-black font-bold  align-middle  bg-lime-200 shadow-md rounded-t-md">
        Contact Details
      </div>
      <div> Select a Contact to see the details</div>
      <ContactDetails />
    </div>
  );
};

export default ContactDetails;
