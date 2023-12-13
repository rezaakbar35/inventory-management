import React, {useState, useEffect} from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import { createWarehouseCategory } from "../../modules/fetch/warehouse_category";


const AddWarehouseCategoryForm = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    category_name: '',
    description: '',
 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCloseWarehoseCategory = (e) => {
    if (e.target.id === 'container') {
      onClose();
    }
  };

  if(!visible){
    return null;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      // Validasi kolom formulir
      if (!formData.category_name || !formData.description) {
        alert('Silakan isi semua kolom yang diperlukan');
        console.log('form data')
        return;
      }
  
      // Kirim permintaan untuk membuat kategori gudang
      await createWarehouseCategory(formData);
  
      // Reset formulir setelah pengiriman berhasil
      setFormData({
        category_name: '',
        description: '',
        // Reset more fields as needed
      });
  
      // Tutup form setelah pengiriman berhasil
      onClose();
  
      // Reload halaman setelah sukses membuat gudang
      window.location.reload();
    } catch (error) {
      console.error('Gagal menambahkan gudang', error);
      // Tampilkan pesan kesalahan yang sesuai dengan kebutuhan pengguna
    }
  };


  return (
    <div id="container" onClick={handleCloseWarehoseCategory} className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
        <div className="m-auto rounded-3xl w-1/3 h-[50%] bg-white p-9">
            <div className="flex justify-end">
              <button onClick={onClose}>
                <XMarkIcon  className="w-6 h-6 text-black"/>
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className="text-3xl font-bold text-black mb-6">Add New Warehouse Category</div>
            <div className="grid mt-2">
                <div className="flex justify-start">
                <label htmlFor="category_name" className="text-black italic font-light pl-2">Category Name</label>
                </div>
                <input type="text" name="category_name" id="category_name" value={formData.category_name}
                onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid mt-5">
                <div className="flex justify-start">
                <label htmlFor="description" className="text-black italic font-light pl-2">Description</label>
                </div>
                <input type="text" name="description" id="description" value={formData.description}
                onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
              </div>
              <div className="grid-template-columns: repeat(12, minmax(0, 1fr));">
              <div className="flex justify-end">
                <button type="submit" className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full">Send</button>
              </div>
              </div>
            </form>
         </div>
    </div>
  );
};

export default AddWarehouseCategoryForm;
