import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"

const SendProductForm = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if(e.target.id === 'container')
    onClose()
  }
  
  if(!visible){
    return null
  }

  return (
    <div id="container" onClick={handleOnClose} className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
        <div className="m-auto rounded-3xl w-1/3 h-[82%] bg-white p-5">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <XMarkIcon  className="w-6 h-6 text-black"/>
              </button>
            </div>
            <div className="text-3xl font-bold text-black mb-6">Send Product</div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Product</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid grid-cols-4 mt-2">
                <div className="flex justify-start">
                <label htmlFor="Select Warehouse" className="text-black italic font-light pl-2" >Quantity</label>
                </div>
                <div className="flex justify-start">
                <label htmlFor="Input a Deadline" className="text-black italic font-light pl-2">Pcs</label>
                </div>
                <div className="flex justify-start col-span-2">
                <label htmlFor="Input a Deadline" className="text-black italic font-light pl-2">Paid Type</label>
                </div>
                <input type="number" name="Quantity" id="Quantity" className="rounded-xl text-black p-2 m-1" />
                <select name="Warehouse" id="Warehouse" className="rounded-xl border-none bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">type..</option>
                  <option value="Offline">Pcs</option>
                  <option value="Online">Pack</option>
                  <option value="B2B">Dozen</option>
                </select> 
                <select name="Warehouse" id="Warehouse" className="rounded-xl col-span-2 bg-gray-300 border-none text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select a paid type..</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                  <option value="B2B">B2B</option>
                </select> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Customer Email</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Customer Username</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Customer Address</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Tracking Number</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
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

export default SendProductForm;
