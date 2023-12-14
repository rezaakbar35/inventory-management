import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableWarehouse.css';
import { getAllWarehouse, getWarehouseById, deleteWarehouse } from "../modules/fetch/warehouse";

const TableWarehouse = ({ setEditWarehouse, setShowEditForm, searchValue }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    getAllWarehouse().then((result) => {
      const newData = result.warehouse.map((item) => ({
        ...item,
        category_name: item.warehouse_category.category_name
      }));
      setData(newData);
      setLoading(false);
    });
  };

  const updateRow = async (warehouse_id) => {
    try {
      const warehouse = await getWarehouseById(warehouse_id);
      setEditWarehouse(warehouse.warehouse);
      setShowEditForm(true);
    } catch (error) {
      console.error('Failed to fetch warehouse for editing', error);
    }
  };

  const deleteRow = (id) => {
    deleteWarehouse(id)
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((error) => {
        console.error('Failed to delete warehouse', error);
      });
  };

  const filteredData = data.filter((item) =>
  String(item.warehouse_name).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.category_name).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.location).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.updated_at).toLowerCase().includes(searchValue.toLowerCase()) ||
  String(item.created_at).toLowerCase().includes(searchValue.toLowerCase()) 
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
            <tr>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID <span onClick={() => toggleSort('warehouse_id')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                Warehouse Name <span onClick={() => toggleSort('warehouse_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location <span onClick={() => toggleSort('location')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                Warehouse Category <span onClick={() => toggleSort('category_name')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                Warehouse Category ID <span onClick={() => toggleSort('warehouse_category_id')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated AT <span onClick={() => toggleSort('updated_at')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created AT <span onClick={() => toggleSort('created_at')} className="hover:cursor-pointer">▼</span>
              </th>
              <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr className="hover:bg-gray-50" key={item.warehouse_id}>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.warehouse_id}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.warehouse_name}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.location}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.category_name}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.warehouse_category_id}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.updated_at}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{item.created_at}</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">
                  <div className="flex items-center justify-center space-x-7">
                    <BsFillTrashFill className="text-red-500 cursor-pointer" onClick={() => deleteRow(item.warehouse_id)} />
                    <BsFillPencilFill className="text-blue-500 cursor-pointer" onClick={() => updateRow(item.warehouse_id)} />
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

export default TableWarehouse;
