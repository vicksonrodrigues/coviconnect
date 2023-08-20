import React from "react";
import ContactList from "./ContactList";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="md:grid grid-cols-2 gap-8 mt-4 mx-2  ">
      <ContactList />
      <Outlet />
    </div>
  );
};

export default Contact;
