import React, {useState} from "react";
import DatePicker from 'react-datepicker'
import { XMarkIcon } from "@heroicons/react/24/solid"
import "react-datepicker/dist/react-datepicker.css";

const NotifyWarehouseForm = ({ visible, onClose }) => {
 
  const [startDate, setStartDate] = useState(new Date())
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
            <div className="text-3xl font-bold text-black mb-6">Notify Warehouse</div>
              <div className="grid">
                <div className="flex justify-start">
                <label htmlFor="UserComplaint" className="text-black italic font-light pl-2">User Complaint</label>
                </div>
                <select name="UserComplaint" id="UserComplaint" className="rounded-xl border-none bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select user complaint..</option>
                  <option value="">Barang Tidak Sampai</option>
                  <option value="">Barang Rusak</option>
                </select> 
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div className="flex justify-start">
                <label htmlFor="SelectWarehouse" className="text-black italic font-light pl-2" >Warehouse</label>
                </div>
                <div className="flex justify-start">
                <label htmlFor="InputDeadline" className="text-black italic font-light pl-2">Input a deadline</label>
                </div>
                <select name="SelectWarehouse" id="SelectWarehouse" className="rounded-xl bg-gray-300 border-none text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
                  <option value="" disabled selected hidden className="text-gray-400">select a warehouse..</option>
                  <option value="">Warehouse B</option>
                  <option value="">Warehouse C</option>
                </select>
                <div className="flex justify-start">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="rounded-xl pr-16 m-1  text-black"
                  showTimeSelect
                  timeFormat="p"
                  timeIntervals={30}
                  dateFormat="Pp"
                /> 
                </div> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="NotificationTitle" className="text-black italic font-light pl-2">Notification Title</label>
                </div>
                <input type="text" name="NotificationTitle" id="NotificationTitle" className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Product" className="text-black italic font-light pl-2">Notification Description</label>
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

export default NotifyWarehouseForm;
