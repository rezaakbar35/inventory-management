import React, { useState, useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import { getNotificationByComplaint } from "../modules/fetch/notification";

export const TableComplaints = ({}) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');

  const NotificationStatus = "Complaint";

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortData();
  }, [sortOrder, sortKey, data]);

  const fetchData = () => {
    setLoading(true);
    getNotificationByComplaint(NotificationStatus).then((result) => {
      setData([...result.notification]);
      setLoading(false);
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
    <div className="table-wrapper overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('notification_id')}>
              ID <span className="hover:cursor-pointer">▼</span>
            </th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('notification_title')}>
              Title <span className="hover:cursor-pointer">▼</span>
            </th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Complaint Description</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('notification_timestamp')}>
              Timestamp <span className="hover:cursor-pointer">▼</span>
            </th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Resolved</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr className="hover:bg-gray-50" key={item.notification_id}>
              <td className="px-6 py-2 text-xs whitespace-nowrap text-gray-500">{item.notification_id}</td>
              <td className="px-6 py-2 text-xs whitespace-nowrap text-gray-500">{item.notification_title}</td>
              <td className="max-w-3xl px-6 py-2 text-xs whitespace-nowrap text-gray-500 truncate">{item.notification_description}</td>
              <td className="px-6 py-2 text-xs whitespace-nowrap text-gray-500">{item.notification_timestamp}</td>
              <td className="px-6 py-2 text-xs whitespace-nowrap text-gray-500">
                <div className="flex items-center justify-center space-x-7">
                  <Checkbox {...label} className="text-blue-500" defaultChecked />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComplaints;
