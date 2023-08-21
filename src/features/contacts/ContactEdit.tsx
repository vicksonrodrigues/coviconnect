import React, { useState } from "react";
import { ContactModel, editContact } from "./contactSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface EditProps {
  id: string | undefined;
  handleEdit: () => void;
}

const ContactEdit = ({ id, handleEdit }: EditProps) => {
  const contactToEdit = useAppSelector((state) =>
    state.contact.find((item) => item.id === id)
  );
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState<string>(
    `${contactToEdit?.firstName}`
  );
  const [lastName, setLastName] = useState<string>(
    `${contactToEdit?.lastName}`
  );
  const [email, setEmail] = useState<string>(`${contactToEdit?.email}`);
  const [phone, setPhone] = useState<string>(`${contactToEdit?.phone}`);

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const editedContact = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    };
    dispatch(editContact({ id: id, editedContact }));
    handleEdit();
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 p-5 overflow-x-hidden overflow-y-hidden md:inset-0  h-full backdrop-blur-sm bg-black/30"
      style={{ zIndex: 1100 }}
    >
      <div className="grid grid-rows-1 gap-3 relative w-full max-w-2xl max-h-full mx-auto mt-16">
        <div className="relative bg-white rounded-lg shadow">
          <button
            onClick={handleEdit}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="flex items-center justify-center p-4 border-b rounded-t">
            <h3 className="text-2xl font-semibold text-gray-900">
              Contact Form
            </h3>
          </div>
          <div>
            <form className=" px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-4">
                  <label
                    className=" block text-gray-700 text-sm font-bold mb-2 text-left "
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={handleFirstName}
                    type="text"
                    id="firstName"
                    className="border shadow-sm appearance-none rounded w-full p-3 text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className=" block text-gray-700 text-sm font-bold mb-2 text-left"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLastName}
                    type="text"
                    id="lastName"
                    className="border shadow-sm appearance-none rounded w-full p-3 text-gray-700"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className=" block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="lastName"
                >
                  Phone No.
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  id="lastName"
                  className="border shadow-sm appearance-none rounded w-full p-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label
                  className=" block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="lastName"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  id="lastName"
                  className="border shadow-sm appearance-none rounded w-full p-3 text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
              >
                Edit Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEdit;
