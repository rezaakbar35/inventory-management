import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"

const IssueComplaintForm = ({ visible, onClose }) => {
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
            <div className="text-3xl font-bold text-black mb-6">Issue Complaint</div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="Tracking_Number" className="text-black italic font-light pl-2">Tracking Number</label>
                </div>
                <input type="text" name="Tracking_Number" id="Tracking_Number" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Status" className="text-black italic font-light pl-2" >Status</label>
                </div>
                <select name="Status" id="Status" className="rounded-xl bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select a status..</option>
                  <option value="">Di Jalan</option>
                  <option value="">Sudah Sampai</option>
                </select> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Complaint_Title" className="text-black italic font-light pl-2">Complaint Title</label>
                </div>
                <input type="text" name="Complaint_Title" id="Complaint_Title" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Describe_Complaint" className="text-black italic font-light pl-2">Describe the Complaint</label>
                </div>
                <textarea name="Describe_Complaint" id="Describe_Complaint" className="rounded-xl text-black p-2 pb-24 m-1" /> 
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

export default IssueComplaintForm;
