import React from "react";
import './TableWarehouse.css'

export const TableWarehouse = ({}) => {
  return (
    <div className="table-wrapper overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Warehouse Name</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Warehouse Category</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Product Category</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
              <tr  className="hover:bg-gray-50">
                <td className="px-6 py-2 whitespace-nowrap">1</td>
                <td className="px-6 py-2 whitespace-nowrap">Toys Warehouse</td>
                <td className="px-6 py-2 whitespace-nowrap">St Simatupang</td>
                <td className="px-6 py-2 whitespace-nowrap">2</td>
                <td className="px-6 py-2 whitespace-nowrap">1</td>
              </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableWarehouse