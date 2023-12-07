import React, {useState, useEffect} from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import { createWarehouse } from "../../modules/fetch/warehouse";
import { getAllWarehouseCategory } from "../../modules/fetch/warehouse_category";

const AddWarehouseForm = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if(e.target.id === 'container')
    onClose()
  }
  
  if(!visible){
    return null
  }

  const [formData, setFormData] = useState({
    warehouse_name: '',
    location: '',
    category_name:'',
    // Add more fields as needed
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    getAllWarehouseCategory().then((result) => {
      setData([...result.warehouseCategory]);
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
      e.preventDefault();

    try {
      // Validasi kolom formulir
      if (!formData.warehouse_name || !formData.location || !formData.category_name) {
        // Tangani kesalahan validasi, misalnya, tampilkan pesan kepada pengguna
        console.error('Silakan isi semua kolom yang diperlukan');
        return;
      }

      // Gunakan createWarehouse tanpa FormData
      await createWarehouse(formData);

      // Atur ulang formulir setelah pengiriman berhasil
      setFormData({
        warehouse_name: '',
        location: '',
        category_name: '',
      });

      // Tangani kesuksesan, misalnya, tutup modal
      onClose();

      // Reload halaman setelah sukses membuat gudang
      window.location.reload();
    } catch (error) {
      // Tangani kesalahan, tampilkan pesan kesalahan yang ramah pengguna
      console.error('Gagal menambahkan gudang', error);
      // Anda mungkin juga ingin menampilkan pesan kesalahan kepada pengguna
    }
  };


  return (
    <div id="container" onClick={handleOnClose} className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
        <div className="m-auto rounded-3xl w-1/3 h-[60%] bg-white p-5">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <XMarkIcon  className="w-6 h-6 text-black"/>
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className="text-3xl font-bold text-black mb-6">Add New Warehouse</div>
            <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="Warehouse_Name" className="text-black italic font-light pl-2">Warehouse Name</label>
                </div>
                <input type="text" name="warehouse_name" id="warehouse_name" value={formData.warehouse_name}
                onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="location" className="text-black italic font-light pl-2">Location</label>
                </div>
                <input type="text" name="location" id="location" value={formData.location}
                onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-4">
              <select name="category_name" id="category_name" value={formData.category_name}
                onChange={handleInputChange} className="rounded-xl border-none bg-gray-300 text-black p-3 m-1 placeholder:text-gray-400 placeholder:font-thin">
              <option disabled value="" className="text-gray-400">Warehouse Category</option>
              {
              data.map((item) => (
                <option key={item.category_id} value={item.category_name}>
                  {item.category_name}
                </option>
                ))
              }
                </select>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full">Send</button>
              </div>
            </form>
         </div>
    </div>
  );
};

export default AddWarehouseForm;
