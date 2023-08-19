import React from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="md:grid grid-cols-2 gap-8 mt-4 mx-2">
      <ContactList />
      <ContactDetails />
    </div>
  );
};

export default Contact;
