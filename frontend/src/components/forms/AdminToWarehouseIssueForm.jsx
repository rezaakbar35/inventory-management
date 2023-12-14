import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  createNotification,
} from "../../modules/fetch/notification";

const AdminToWarehouseIssueForm = ({ visible, onClose }) => {

  const handleOnClose = (e) => {
    if(e.target.id === 'container')
    onClose()
  }
  
  if(!visible){
    return null
  }

  const [data, setData] = useState({
    username: "",
    notification_title: "",
    notification_description: "",
    notification_status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(data)

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNotification(data.notification_title, data.notification_description, data.username, data.notification_status);
      // Panggil fungsi sukses dan tutup formulir
      setData({
        username:"",
        notification_title: "",
        notification_description: "",
        notification_status: "",
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to create notification", error);
    }
  };

  return (
    <div id="container" onClick={handleOnClose} className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
        <div className="m-auto rounded-3xl w-1/3 h-3/4 bg-white p-5">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <XMarkIcon  className="w-6 h-6 text-black"/>
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className="text-3xl font-bold text-black mb-6">Issue Notification to Warehouse</div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="username" className="text-black italic font-light pl-2">User</label>
                </div>
                <input type="text" name="username" id="username" value={data.username} onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="notification_title" className="text-black italic font-light pl-2">Title</label>
                </div>
                <input type="text" name="notification_title" id="notification_title" value={data.notification_title} onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid">
              <div className="flex justify-start">
              <label htmlFor="notification_status" className="text-black italic font-light pl-2">Status</label>
              </div>
              <select name="notification_status" id="notification_status" value={data.notification_status}
                onChange={handleInputChange} className="rounded-xl border-none bg-gray-300 text-black p-3 m-1 placeholder:text-gray-400 placeholder:font-thin">
              <option disabled value="" className="text-gray-400">Notification Status</option>
              <option>Warning</option>
              </select>
             
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="notification_" className="text-black italic font-light pl-2">Description</label>
                </div>
                <textarea name="notification_description" id="notification_description" value={data.notification_description} onChange={handleInputChange} className="rounded-xl text-black p-2 pb-24 m-1" /> 
              </div>
              <div className="flex justify-end">
                <button type="submit" className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full">Send</button>
              </div>
            </form>
            </div>
        </div>

  );
};

export default AdminToWarehouseIssueForm;
