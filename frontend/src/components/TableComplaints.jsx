import React from "react";
import Checkbox from '@mui/material/Checkbox';

export const TableComplaints = ({}) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="table-wrapper overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">User Name</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Ticket No</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">User Address</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Complaint</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Resolved</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-2 whitespace-nowrap">1</td>
            <td className="px-6 py-2 whitespace-nowrap">Bebeb</td>
            <td className="px-6 py-2 whitespace-nowrap">beb@gmail.com</td>
            <td className="px-6 py-2 whitespace-nowrap">100221011</td>
            <td className="px-6 py-2 whitespace-nowrap">St Situ Oke</td>
            <td className="px-6 py-2 whitespace-nowrap">Barang Tidak sesuai</td>
            <td className="px-6 py-2 whitespace-nowrap">
              <div className="flex items-center justify-center space-x-7">
                <Checkbox {...label} className="text-blue-500" defaultChecked />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComplaints;
