import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"

const FormModal = ({ visible, onClose }) => {
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
            <div className="text-2xl font-bold text-black mb-10">Manage Product</div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Product</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-5">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Product</label>
                <label htmlFor="Product" className="text-black italic font-light pl-2">Product</label>
                </div>
                <input type="text" name="Product" id="Product" className="rounded-xl text-black p-2 m-1" /> 
              </div>
            </div>
         <div>

        </div>
    </div>
  );
};

export default FormModal;
