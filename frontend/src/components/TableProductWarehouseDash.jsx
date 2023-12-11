import React, { useEffect, useState } from "react";
import './TableProduct.css'
import EditProductForm from "./forms/EditProductForm";
import {  getAllProduct } from "../modules/fetch/product";

export const TableProductWarehouseDash = ({}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

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
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Stock</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Category</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse</th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Arrrival Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
              {
                data.map((item) => (
                  <tr  className="hover:bg-gray-50" key={item.product_id}>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_id }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_code }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.product_stock }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.category_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.warehouse_name }</td>
                    <td className="px-6 py-2 whitespace-nowrap">{ item.arrival_at } </td>
                    
                </tr>
                ))
              }
          </tbody>
        </table>

         {/* Tambahkan logika untuk menampilkan formulir pengeditan */}
         {showEditForm && (
            <EditProductForm
              visible={showEditForm}
              product={editProduct}
              onClose={() => {
                setShowEditForm(false);
                setEditProduct(null);
              }}
              onEditSuccess={() => {
                setShowEditForm(false);
                setEditProduct(null);
                fetchData();
              }}
            />
          )}
      </div>
      )
    )

  );
};

export default TableProductWarehouseDash