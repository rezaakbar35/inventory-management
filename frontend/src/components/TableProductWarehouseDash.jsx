import React, { useEffect, useState } from "react";
import './TableProduct.css';
import EditProductForm from "./forms/EditProductForm";
import { getAllProduct } from "../modules/fetch/product";

export const TableProductWarehouseDash = ({searchValue}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    sortData();
  }, [sortOrder, sortKey]);

  const fetchData = () => {
    setLoading(true);
    getAllProduct().then((result) => {
      const newData = result.product.map((item) => ({
        ...item,
        warehouse_name: item.warehouse.warehouse_name,
        category_name: item.product_category.category_name
      }));
      setData(newData);
      setLoading(false);
    });
  };

  const filteredData = data.filter((item) =>
  String(item.product_name).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.product_code).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.category_name).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.warehouse_name).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.arrival_at).toLowerCase().includes(searchValue.toLowerCase())
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
                ID <span onClick={() => toggleSort('product_id')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Product Name <span onClick={() => toggleSort('product_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Product Code <span onClick={() => toggleSort('product_code')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Product Stock <span onClick={() => toggleSort('product_stock')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Product Category <span onClick={() => toggleSort('category_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Warehouse <span onClick={() => toggleSort('warehouse_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-Large text-gray-500 uppercase tracking-wider">
                Arrival Date <span onClick={() => toggleSort('arrival_at')} className="hover:cursor-pointer">▼</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
            {/* Table body */}
            {filteredData.map((item) => (
              <tr className="hover:bg-gray-50" key={item.product_id}>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.product_id}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.product_name}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.product_code}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.product_stock}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.category_name}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.warehouse_name}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">{item.arrival_at}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Logic to display the edit form */}
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
  );
};

export default TableProductWarehouseDash;
