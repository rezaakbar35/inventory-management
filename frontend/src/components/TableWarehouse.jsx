import React,{useState, useEffect} from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './TableWarehouse.css'
import { getAllWarehouse, getWarehouseById, deleteWarehouse } from "../modules/fetch/warehouse";

export const TableWarehouse = ({setEditWarehouse, setShowEditForm}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setLoading(true);
    getAllWarehouse().then((result) => {
      const newData = result.warehouse.map((item) => ({
        ...item,
        category_name: item.warehouse_category.category_name
      }));
    setData(newData);
      setLoading(false)
    })
  }

  const updateRow = async (warehouse_id) => {
    try {
      const warehouse = await getWarehouseById(warehouse_id);
      console.log(warehouse)
      setEditWarehouse(warehouse.warehouse);
      setShowEditForm(true);
    } catch (error) {
      console.error('Failed to fetch warehouse for editing', error);
    }
  }

  const deleteRow =  (id) => {
     deleteWarehouse(id).then((response) => {
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
    <div className="table-wrapper overflow-x-auto rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
        <tr>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Warehouse Name</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Warehouse Category</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Updated AT</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Created AT</th>
            <th className="px-6 py-3 text-centre text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {
                data.map((item) => (
              <tr  className="hover:bg-gray-50" key={item.warehouse_id}>
                 <td className="px-6 py-2 whitespace-nowrap text-black">{ item.warehouse_id }</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{ item.warehouse_name }</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{ item.category_name}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{ item.location }</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{ item.updated_at}</td>
                <td className="px-6 py-2 whitespace-nowrap text-black">{ item.created_at }</td>
                <td className="px-6 py-2 text-xs whitespace-nowrap">
                  <div className="flex items-center justify-center space-x-7">
                  <BsFillTrashFill className="text-red-500 cursor-pointer" onClick={() => deleteRow(item.warehouse_id)} />
                  <BsFillPencilFill className="text-blue-500 cursor-pointer" onClick={() => updateRow(item.warehouse_id)} />
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

export default TableWarehouse