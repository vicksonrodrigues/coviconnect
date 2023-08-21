import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { useAppSelector } from "../../app/hooks";
import SingleContact from "./SingleContact";
import { useNavigate } from "react-router-dom";
import { ContactModel } from "./contactSlice";
const NoContact = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        onClick={handleOpen}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
      >
        Create Contact
      </button>
      <ContactForm open={open} handleClose={handleClose} />
    </div>
  );
};

const ContactList = () => {
  const contactList = useAppSelector((state) => state.contact);

  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [currentList, setCurrentList] = useState<ContactModel[]>();
  const [search, setSearch] = useState<string>("");

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCurrentList(contactList);
    if (contactList.length === 0) {
      navigate("/contact");
    }
  }, [contactList]);

  useEffect(() => {
    if (search === "") {
      setCurrentList(contactList);
    }
  }, [search]);

  const handleSearchSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const searchList = currentList?.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(search.toLowerCase())
    );

    setCurrentList(searchList);
  };

  return (
    <div className="flex flex-col w-full  border-4 border-t-4 rounded-t-2xl ">
      <div className=" flex px-5 h-16  items-center justify-between bg-lime-200 shadow-md rounded-t-xl">
        <div className="text-2xl  text-black font-bold">Contact List </div>
        <button
          onClick={handleOpen}
          className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Add Contact
        </button>
        <ContactForm open={open} handleClose={handleClose} />
      </div>

      <div className=" flex flex-col w-full h-full ">
        {contactList?.length === 0 ? (
          <NoContact />
        ) : (
          <div className=" py-4  ">
            <form className=" mx-4 pb-6 flex " onSubmit={handleSearchSubmit}>
              <label className=" sr-only">Search Contact</label>
              <div className=" w-full">
                <input
                  value={search}
                  onChange={handleSearchInput}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search Contact by Name..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
            <div className="mx-4 pb-2 text-sm font-semibold">
              Number of Contact: {currentList?.length}
            </div>
            {currentList?.length !== 0 ? (
              <div className="   mb-16 md:mb-0 flex flex-col px-4   ">
                {currentList?.map((contact) => (
                  <SingleContact key={contact.id} contact={contact} />
                ))}
              </div>
            ) : (
              <div className="p-4 text-xl"> No matching contact name found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
