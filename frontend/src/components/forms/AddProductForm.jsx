import React from "react";
import { FileInput, Label } from "flowbite-react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const AddProductForm = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur"
    >
      <div className="m-auto rounded-3xl w-1/3 h-[60%] bg-white p-5">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <form>
          <div className="text-3xl font-bold text-black mb-6">
            Add New Product
          </div>
          <div className="grid grid-cols-4">
            <div className="flex justify-start col-span-3">
              <label
                htmlFor="Product_Name"
                className="text-black cols-span-3 italic font-light pl-2"
              >
                Product Name
              </label>
            </div>
            <div className="flex justify-start ">
              <label
                htmlFor="Product_Code"
                className="text-black italic font-light pl-2"
              >
                Product Code
              </label>
            </div>
            <input
              type="text"
              name="Product"
              id="Product"
              className="rounded-xl text-black p-2 m-1 col-span-3"
            />
            <input
              type="text"
              name="Product"
              id="Product"
              className="rounded-xl text-black p-2 m-1"
            />
          </div>
          <div className="grid grid-cols-4 mt-2">
            <div className="flex justify-start">
              <label
                htmlFor="Quantity"
                className="text-black italic font-light pl-2"
              >
                Quantity
              </label>
            </div>
            <div className="flex justify-start">
              <label
                htmlFor="Unit"
                className="text-black italic font-light pl-2"
              >
                Unit
              </label>
            </div>
            <div className="flex justify-start col-span-2">
              <label
                htmlFor="Photo"
                className="text-black italic font-light pl-2"
              >
                Product Photo
              </label>
            </div>
            <input
              type="number"
              name="Quantity"
              id="Quantity"
              className="rounded-xl text-black p-2 m-1"
            />
            <select
              name="Unit"
              id="Unit"
              className="rounded-xl border-none bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin"
            >
              <option
                value=""
                disabled
                selected
                hidden
                className="text-gray-400"
              >
                unit..
              </option>
              <option value="Pcs">Pcs</option>
              <option value="Pack">Pack</option>
              <option value="Dozen">Dozen</option>
            </select>
            <div className="flex justify-start col-span-2 row-span-8 m-1">
              <Label
                htmlFor="dropzone-file"
                className="dark:hover:bg-bray-800 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="my-5 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>
            <div className="flex justify-start col-span-2">
              <label
                htmlFor="Category"
                className="text-black italic font-light pl-2"
              >
                Category
              </label>
            </div>
            <input
              type="text"
              name="Category"
              id="Category"
              className="rounded-xl text-black p-2 m-1 col-span-2"
            />
            <div className="col-span-2"></div>
            <div className="flex justify-start col-span-2">
              <label
                htmlFor="Warehouse"
                className="text-black italic font-light pl-2"
              >
                Warehouse
              </label>
            </div>
            <div className="col-span-2"></div>
            <input
              type="text"
              name="Warehouse"
              id="Warehouse"
              className="rounded-xl text-black p-2 m-1 col-span-2"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <div></div>
    </div>
  );
};

export default AddProductForm;
