import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableProduct.css'
import { getAllNotification, getNotificationById, deleteNotification } from "../modules/fetch/notification";

export const TableNotification = ({}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortData();
  }, [sortOrder, sortKey, data]);

  const fetchData = () => {
    setLoading(true);
    getAllNotification().then((result) => {
      setData([...result.notification]);
      setLoading(false);
    });
  };

  const editRow = (id) => {
    console.log(id);
  };

  const deleteRow = (id) => {
    deleteNotification(id).then((response) => {
      console.log(response);
      fetchData();
    });
  };

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder('asc');
      setSortKey(key);
    }
  };

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      const valueA = sortKey ? a[sortKey] : '';
      const valueB = sortKey ? b[sortKey] : '';

      if (valueA < valueB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
  };

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
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                  ID <span onClick={() => toggleSort('notification_id')} className="hover:cursor-pointer">▼</span>
                </th>
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">Complain Status<span onClick={() => toggleSort('notification_status')} className="hover:cursor-pointer">▼</span></th>
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">Title<span onClick={() => toggleSort('notification_title')} className="hover:cursor-pointer">▼</span></th>
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('notification_timestamp')}>
                  Complain Sent <span onClick={() => toggleSort('notification_timestamp')} className="hover:cursor-pointer">▼</span>
                </th>
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-black">
              {
                data.map((item) => (
                  <tr  className="hover:bg-gray-50" key={item.notification_id}>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{item.notification_id}</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{item.notification_status}</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{item.notification_title}</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap max-w-3xl truncate">{item.notification_description}</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{item.notification_timestamp}</td>
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

export default TableNotification;
