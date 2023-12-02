import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"

const AddWarehouseForm = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if(e.target.id === 'container')
    onClose()
  }
  
  if(!visible){
    return null
  }

  return (
    <div id="container" onClick={handleOnClose} className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
        <div className="m-auto rounded-3xl w-1/3 h-[60%] bg-white p-5">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <XMarkIcon  className="w-6 h-6 text-black"/>
              </button>
            </div>
            <form>
            <div className="text-3xl font-bold text-black mb-6">Add New Warehouse</div>
            <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Warehouse_Name" className="text-black italic font-light pl-2">Warehouse Name</label>
                </div>
                <input type="text" name="Warehouse_Name" id="Warehouse_Name" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Warehouse_Category" className="text-black italic font-light pl-2">Warehouse Category</label>
                </div>
                <input type="text" name="Warehouse_Category" id="Warehouse_Category" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Warehouse_Description" className="text-black italic font-light pl-2">Warehouse Description</label>
                </div>
                <textarea name="Warehouse_Description" id="Warehouse_Description" className="rounded-xl text-black p-2 pb-14 m-1" /> 
              </div>
              <div className="flex justify-end">
                <button type="submit" className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full">Send</button>
            </div>
            </form>
         </div>
    </div>
  );
};

export default AddWarehouseForm;
