import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { jwtDecode } from "jwt-decode";
import {
  getAllProductShipping,
  deleteProductShipping,
  getProductShippingByUser,
} from "../modules/fetch/product_shipping";
import { getUserSpecific } from "../modules/fetch/index";

const TableUserProduct = ({searchValue}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const username = await checkuser();
        const result = await getProductShippingByUser(username);

        if (result.shipping && Array.isArray(result.shipping)) {
          const newData = result.shipping.map((item) => ({
            ...item,
            product_name: item.product.product_name,
            username: item.buyer.username,
            user_address: item.buyer.user_address,
            warehouse_name: item.warehouse.warehouse_name,
          }));
          setData(newData);
        } else {
          console.error(
            "Response yang tidak valid atau tidak dapat di-iterasi dari getAllProductShipping"
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchValue]);

  let specificUser

  const checkuser = async () => {
    // (The rest of the checkuser function remains unchanged)
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

  const filteredData = data.filter((item) =>
  String(item.product_name).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.username).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.user_address ).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.warehouse_name ).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.quantity ).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.tracking_number ).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.product_shipment_status ).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.shipping_at ).toLowerCase().includes(searchValue.toLowerCase()) 
  ); 

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

  return loading ? (
    <div>Loading ..</div>
  ) : (
    <div className="table-wrapper overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              ID <span
                onClick={() => toggleSort("shipping_id")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            {/* <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product ID</th> */}
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Product Name <span
                onClick={() => toggleSort("product_name")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            {/* <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Buyer ID</th> */}
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Username <span
                onClick={() => toggleSort("username")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              User Address <span
                onClick={() => toggleSort("user_address")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            {/* <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse ID</th> */}
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Warehouse Name <span
                onClick={() => toggleSort("warehouse_name")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Quantity <span
                onClick={() => toggleSort("quantity")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Tracking Number 
            </th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Status <span
                onClick={() => toggleSort("product_shipment_status")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Shipping At <span
                onClick={() => toggleSort("shipping_at")}
                className="hover:cursor-pointer"
              >
                ▼
              </span>
            </th>
            <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-black">
          {filteredData.map((item) => (
            <tr className="hover:bg-gray-50" key={item.shipping_id}>
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.shipping_id}
              </td>
              {/* <td className="px-6 py-2 whitespace-nowrap">{ item.product_id }</td> */}
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.product_name}
              </td>
              {/* <td className="px-6 py-2 whitespace-nowrap">{ item.buyer_id }</td> */}
              <td className="px-6 py-2 whitespace-nowrap text-xs">{item.username}</td>
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.user_address}
              </td>
              {/* <td className="px-6 py-2 whitespace-nowrap">{ item.warehouse_id }</td> */}
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.warehouse_name}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-xs">{item.quantity} </td>
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.tracking_number}{" "}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.product_shipment_status}{" "}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                {item.shipping_at}{" "}
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-xs">
                <div className="flex items-center justify-center space-x-7 text-xs">
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
  );
};

export default TableUserProduct;
