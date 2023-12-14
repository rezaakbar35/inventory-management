import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { getAllProductShipping, deleteProductShipping } from "../modules/fetch/product_shipping";

export const TableProductShippingWarehouse = ({}) => {
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
    getAllProductShipping().then((result) => {
      if (result.allShippings && Array.isArray(result.allShippings)) {
        const newData = result.allShippings.map((item) => ({
          ...item,
          product_name: item.product.product_name,
          username: item.buyer.username,
          user_address: item.buyer.user_address,
          warehouse_name: item.warehouse.warehouse_name
        }));
        setData(newData);
      } else {
        console.error('Invalid or non-iterable response from getAllProductShipping');
      }
      setLoading(false);
    });
  };

  const editRow = (id) => {
    console.log(id);
  };

  const deleteRow = (id) => {
    deleteProductShipping(id).then((response) => {
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
    loading ? (
      <div>Loading ..</div>
    ) : (
      <div className="table-wrapper overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            {/* Table header with sorting icons */}
            <tr>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                ID <span onClick={() => toggleSort('shipping_id')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Product Name <span onClick={() => toggleSort('product_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Username <span onClick={() => toggleSort('username')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                User Address <span onClick={() => toggleSort('user_address')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Warehouse Name <span onClick={() => toggleSort('warehouse_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Quantity <span onClick={() => toggleSort('quantity')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Tracking Number <span onClick={() => toggleSort('tracking_number')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Status <span onClick={() => toggleSort('product_shipment_status')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Shipping At <span onClick={() => toggleSort('shipping_at')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
            {/* Table body */}
            {data.map((item) => (
              <tr className="hover:bg-gray-50" key={item.shipping_id}>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.shipping_id}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.product_name}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.username}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.user_address}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.warehouse_name}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.tracking_number}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.product_shipment_status}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.shipping_at}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">
                  {/* Action icons */}
                  <div className="flex items-center justify-center space-x-7">
                    <BsFillTrashFill
                      className="text-red-500 cursor-pointer"
                      onClick={() => deleteRow(item.shipping_id)}
                    />
                    <BsFillPencilFill
                      className="text-blue-500 cursor-pointer"
                      onClick={() => editRow(item.shipping_id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default TableProductShippingWarehouse;
