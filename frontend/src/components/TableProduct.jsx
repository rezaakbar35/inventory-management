import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableProduct.css'
import { deleteProduct, getAllProduct } from "../modules/fetch/product";

export const TableProduct = ({}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setLoading(true);
    getAllProduct().then((result) => {
      const newData = result.product.map((item) => ({
        ...item,
        warehouse_name: item.warehouse.warehouse_name,
        category_name: item.product_category.category_name
      }));
      setData(newData);
      setLoading(false)
    })
  }

  const editRow = (id) => {
    console.log(id)
  }

  const deleteRow =  (id) => {
     deleteProduct(id).then((response) => {
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
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Code</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Category</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Arrrival Date</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
              {
                data.map((item) => (
                  <tr  className="hover:bg-gray-50" key={item.product_id}>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_id }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_code }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.category_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.warehouse_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.arrival_at } </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center space-x-7">
                  <BsFillTrashFill className="text-red-500 cursor-pointer" onClick={() => deleteRow(item.product_id)} />
                  <BsFillPencilFill className="text-blue-500 cursor-pointer" onClick={() => editRow(item.product_id)} />
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

export default TableProduct