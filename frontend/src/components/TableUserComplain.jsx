import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableProduct.css'
import { getAllNotification, getNotificationById, deleteNotification } from "../modules/fetch/notification";

export const TableNotification = ({}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setLoading(true);
    getAllNotification().then((result) => {
      setData([...result.notification]);
      setLoading(false)
    })
  }

  const editRow = (id) => {
    console.log(id)
  }

  const deleteRow =  (id) => {
    deleteNotification(id).then((response) => {
      console.log(response)
      fetchData();
    })
  }

  return (
    (
      loading ?
      (
        <div>Loading ..</div>
      ) :
      (
        <div className="table-wrapper overflow-x-auto">
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-centre text-xs text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-centre text-xs text-gray-500 uppercase tracking-wider">Complain Status</th>
              <th className="px-6 py-3 text-centre text-xs text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-centre text-xs text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-centre text-xs text-gray-500 uppercase tracking-wider">Complain Sent</th>
              <th className="px-6 py-3 text-centre text-xs text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
              {
                data.map((item) => (
                  <tr  className="hover:bg-gray-50">
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.notification_id }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.notification_status }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.notification_title }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap max-w-3xl truncate">{ item.notification_description }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.notification_timestamp } </td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">
                  <div className="flex items-center justify-center space-x-7">
                  <BsFillTrashFill className="text-red-500 cursor-pointer" onClick={() => deleteRow(item.notification_id)} />
                  <BsFillPencilFill className="text-blue-500 cursor-pointer" onClick={() => editRow(item.notification_id)} />
                  </div>
                  </td>
                </tr>
                ))
              }
          </tbody>
        </table>
      </div>
      )
    )

  );
};

export default TableNotification