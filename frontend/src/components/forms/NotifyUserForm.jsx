import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"

const NotifyUserForm = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if(e.target.id === 'container')
    onClose()
  }
  
  if(!visible){
    return null
  }

  return (
    <div id="container" onClick={handleOnClose} className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
        <div className="m-auto rounded-3xl w-1/3 h-3/4 bg-white p-5">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <XMarkIcon  className="w-6 h-6 text-black"/>
              </button>
            </div>
            <div className="text-3xl font-bold text-black mb-6">Notify User</div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Product</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div className="flex justify-start">
                <label htmlFor="Select Warehouse" className="text-black italic font-light pl-2" >Warehouse</label>
                </div>
                <div className="flex justify-start">
                <label htmlFor="Input a Deadline" className="text-black italic font-light pl-2">Input a deadline</label>
                </div>
                <select name="Warehouse" id="Warehouse" className="rounded-xl bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select a warehouse..</option>
                  <option value="">Warehouse B</option>
                  <option value="">Warehouse C</option>
                </select> 
                <input type="date" name="Deadline" id="Deadline" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Issue an Action</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Describe the Action</label>
                </div>
                <textarea name="Product" id="Product" className="rounded-xl text-black p-2 pb-24 m-1" /> 
              </div>
              <div className="flex justify-end">
                <button type="submit" className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full">Send</button>
              </div>
            </div>
         <div>

        </div>
    </div>
  );
};

export default NotifyUserForm;
