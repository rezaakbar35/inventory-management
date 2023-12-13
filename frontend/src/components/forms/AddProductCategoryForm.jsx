import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import { createProductCategory } from "../../modules/fetch/product_category";

const AddProductCategoryForm = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
      if(e.target.id === 'container')
      onClose()
    }
    
    if(!visible){
      return null
    }
  
    const [productCategory, setProductCategory] = useState({
        category_name: '',
        description: '',
      });
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProductCategory((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleFormSubmit = async (e) => {
        e.preventDefault();
  
      try {
        // Validasi kolom formulir
        if (!productCategory.category_name || !productCategory.description) {
          // Tangani kesalahan validasi, misalnya, tampilkan pesan kepada pengguna
          alert('Silakan isi semua kolom yang diperlukan');
          return;
        }
  
        // Gunakan createWarehouse tanpa FormData
        await createProductCategory(productCategory.category_name, productCategory.description);
  
        // Atur ulang formulir setelah pengiriman berhasil
        setProductCategory({
          category_name: '',
          description: '',
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
              <div className="text-3xl font-bold text-black mb-6">Add New Category Product</div>
              <div className="grid mt-2">
                  <div className="flex justify-start">
                  <label htmlFor="category_name" className="text-black italic font-light pl-2">Product Category Name</label>
                  </div>
                  <input type="text" name="category_name" id="category_name" value={productCategory.category_name}
                  onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
                </div>
                <div className="grid mt-2">
                  <div className="flex justify-start">
                  <label htmlFor="description" className="text-black italic font-light pl-2">Description</label>
                  </div>
                  <input type="text" name="description" id="description" value={productCategory.description}
                  onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" /> 
                </div>
               
                <div className="flex justify-end">
                  <button type="submit" className="text-white font-bold bg-primary mt-40 mr-1 px-5 py-2 rounded-full">Send</button>
                </div>
              </form>
           </div>
      </div>
    );
  };
  
  export default AddProductCategoryForm;