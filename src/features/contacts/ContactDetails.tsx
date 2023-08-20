import React, { useState } from "react";
import { ContactModel } from "./contactSlice";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import ContactEdit from "./ContactEdit";
import ContactDeleteModal from "./ContactDeleteModal";

export const ContactDetailsForm = ({
  contact,
}: {
  contact: ContactModel | undefined;
}) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const handleDeleteContact = () => {
    setOpenDelete(!openDelete);
  };
  const handleEditContact = () => {
    setOpenEdit(!openEdit);
  };
  return (
    <div className="flex flex-col p-4 w-full">
      <div className="inline-flex items-center">
        <p className="text-lg mr-2 font-bold">First Name: </p>
        <span className="text-emerald-600 font-semibold">
          {contact?.firstName}
        </span>
      </div>
      <div className="inline-flex items-center">
        <p className="text-lg mr-2 font-bold">Last Name: </p>
        <span className="text-emerald-600 font-semibold">
          {contact?.lastName}
        </span>
      </div>
      <div className="inline-flex items-center">
        <p className="text-lg mr-2 font-bold">Phone: </p>
        <span className="text-emerald-600 font-semibold">{contact?.phone}</span>
      </div>
      <div className="inline-flex items-center">
        <p className="text-lg mr-2 font-bold">Email: </p>
        <span className="text-emerald-600 font-semibold">{contact?.email}</span>
      </div>
      <div className="inline-flex justify-end py-2">
        <button
          onClick={handleDeleteContact}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Delete
        </button>
        <button
          onClick={handleEditContact}
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Edit
        </button>
        {openEdit ? (
          <ContactEdit id={contact?.id} handleEdit={handleEditContact} />
        ) : null}
        {openDelete ? (
          <ContactDeleteModal
            id={contact?.id}
            handleDeleteModal={handleDeleteContact}
          />
        ) : null}
      </div>
    </div>
  );
};

const ContactDetails = () => {
  const { contactId } = useParams();
  const contact = useAppSelector((state) =>
    state.contact.find((contact) => contact.id === contactId)
  );
  return (
    <div className=" hidden md:block w-full">
      <div className="block p-2 h-16  text-center text-2xl text-black font-bold  align-middle  bg-lime-200 shadow-md rounded-t-md">
        Contact Details
      </div>
      {contact ? (
        <ContactDetailsForm contact={contact} />
      ) : (
        <div className="text-lg text-center p-2">
          {" "}
          Select a Contact to see the details
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default ContactDetails;
