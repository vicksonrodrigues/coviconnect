import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { removeContact } from "./contactSlice";

interface DeleteProps {
  id: string | undefined;
  handleDeleteModal: () => void;
}

const ContactDeleteModal = ({ id, handleDeleteModal }: DeleteProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(removeContact({ id: id }));
    handleDeleteModal();
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 p-5 overflow-x-hidden overflow-y-hidden md:inset-0  h-full backdrop-blur-sm bg-black/30"
      style={{ zIndex: 1100 }}
    >
      <div className="grid grid-rows-1 gap-3 relative w-full max-w-2xl max-h-full mx-auto my-16">
        <div className="relative bg-white rounded-lg shadow">
          <button
            onClick={handleDeleteModal}
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
          <div className="p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto mb-4 text-gray-400 w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this contact?
            </h3>
            <button
              onClick={handleDelete}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 "
            >
              Yes,I&apos;m sure
            </button>
            <button
              onClick={handleDeleteModal}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
            >
              No,Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDeleteModal;
