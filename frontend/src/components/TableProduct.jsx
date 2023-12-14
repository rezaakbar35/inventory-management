import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableProduct.css'
import EditProductForm from "./forms/EditProductForm";
import { deleteProduct, getAllProduct, getProductById } from "../modules/fetch/product";


const TableProduct = ({ setEditProduct, setShowEditForm }) => {
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
    getAllProduct()
      .then((result) => {
        const newData = result.product.map((item) => ({
          ...item,
          warehouse_name: item.warehouse.warehouse_name,
          category_name: item.product_category.category_name,
        }));
        setData(newData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch data', error);
        setLoading(false);
      });
  };

  const editRow = async (product_id) => {
    try {
      const product = await getProductById(product_id);
      setEditProduct(product.product);
      setShowEditForm(true);
    } catch (error) {
      console.error('Failed to fetch product for editing', error);
    }
  };

  const deleteRow = (id) => {
    deleteProduct(id)
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((error) => {
        console.error('Failed to delete product', error);
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">ID <span onClick={() => toggleSort('product_id')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Name <span onClick={() => toggleSort('product_name')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Code <span onClick={() => toggleSort('product_code')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Stock <span onClick={() => toggleSort('product_stock')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Category <span onClick={() => toggleSort('category_name')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Warehouse Name <span onClick={() => toggleSort('warehouse_name')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Created Date <span onClick={() => toggleSort('created_at')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Product Status <span onClick={() => toggleSort('product_status')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Arrrival Date <span onClick={() => toggleSort('arrival_at')} className="hover:cursor-pointer">▼</span></th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
              {
                data.map((item) => (
                  <tr  className="hover:bg-gray-50" key={item.product_id}>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.product_id }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.product_name }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.product_code }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.product_stock }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.category_name }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.warehouse_name }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.created_at }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.product_status }</td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">{ item.arrival_at } </td>
                    <td className="px-6 py-2 text-xs whitespace-nowrap">
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