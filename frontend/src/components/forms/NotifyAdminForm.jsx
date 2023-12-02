import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"

const NotifyAdminForm = ({ visible, onClose }) => {
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
            <div className="text-3xl font-bold text-black mb-6">Notify Admin</div>
            <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Topic" className="text-black italic font-light pl-2" >Topic</label>
                </div>
                <select name="Topic" id="Topic" className="rounded-xl bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select a topic...</option>
                  <option value="">Barang Rusak</option>
                  <option value="">Barang Hilang</option>
                </select> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Warehouse" className="text-black italic font-light pl-2" >Warehouse</label>
                </div>
                <select name="Warehouse" id="Warehouse" className="rounded-xl bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select warehouse..</option>
                  <option value="">Warehouse A</option>
                  <option value="">Warehouse B</option>
                </select> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Notification_Title" className="text-black italic font-light pl-2">Notification Title</label>
                </div>
                <input type="text" name="Notification_Title" id="Notification_Title" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Notification_Description" className="text-black italic font-light pl-2">Description</label>
                </div>
                <textarea name="Notification_Description" id="Notification_Description" className="rounded-xl text-black p-2 pb-24 m-1" /> 
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

export default NotifyAdminForm;
