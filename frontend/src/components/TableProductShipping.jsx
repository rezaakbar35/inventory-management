import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { getAllProductShipping, deleteProductShipping } from "../modules/fetch/product_shipping";

export const TableProductShipping = ({}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

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
            console.error('Respons yang tidak valid atau tidak dapat di-iterasi dari getAllProductShipping');
          }
      setLoading(false)
    })
  }

  const editRow = (id) => {
    console.log(id)
  }

  const deleteRow = (id) => {
     deleteProductShipping(id).then((response) => {
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">ID</th>
              {/* <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product ID</th> */}
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Name</th>
              {/* <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Buyer ID</th> */}
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">User Address</th>
              {/* <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse ID</th> */}
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse Name</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Tracking Number</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Shipping At</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Action</th>
            
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
              {
                data.map((item) => (
                  <tr  className="hover:bg-gray-50" key={item.shipping_id}>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.shipping_id }</td>
                    {/* <td className="px-6 py-2 whitespace-nowrap">{ item.product_id }</td> */}
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_name }</td>
                    {/* <td className="px-6 py-2 whitespace-nowrap">{ item.buyer_id }</td> */}
                    <td className="px-6 py-2 whitespace-nowrap">{ item.username }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.user_address }</td>
                    {/* <td className="px-6 py-2 whitespace-nowrap">{ item.warehouse_id }</td> */}
                    <td className="px-6 py-2 whitespace-nowrap">{ item.warehouse_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.quantity } </td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.tracking_number } </td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_shipment_status } </td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.shipping_at } </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center space-x-7">
                  <BsFillTrashFill className="text-red-500 cursor-pointer" onClick={() => deleteRow(item.shipping_id)} />
                  <BsFillPencilFill className="text-blue-500 cursor-pointer" onClick={() => editRow(item.shipping_id)} />
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

export default TableProductShipping