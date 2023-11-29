import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableProduct.css'

export const TableProduct = ({}) => {
  return (
    <div className="table-wrapper overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Code</th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse</th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Arrrival Date</th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
              <tr  className="hover:bg-gray-50">
                <td className="px-6 py-2 whitespace-nowrap">1</td>
                <td className="px-6 py-2 whitespace-nowrap">Baby Gum</td>
                <td className="px-6 py-2 whitespace-nowrap">11210</td>
                <td className="px-6 py-2 whitespace-nowrap">Toys Warehouse</td>
                <td className="px-6 py-2 whitespace-nowrap">02.00 PM 12/12/23</td>
                <td className="px-6 py-2 whitespace-nowrap">
               <div className="flex items-center justify-center space-x-7">
              <BsFillTrashFill className="text-red-500 cursor-pointer" onClick={() => deleteRow()} />
              <BsFillPencilFill className="text-blue-500 cursor-pointer" onClick={() => editRow()} />
              </div>
              </td>

              </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct