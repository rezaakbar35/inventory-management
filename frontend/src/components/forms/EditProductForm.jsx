import React, { useState, useEffect } from "react";
import { updateProduct } from "../../modules/fetch/product";
import { getAllWarehouse } from "../../modules/fetch/warehouse";
import { getAllProductCategory } from "../../modules/fetch/product_category";
import {useDropzone} from 'react-dropzone';
import { XMarkIcon } from "@heroicons/react/24/solid"

const EditProductForm = ({ visible, product, onClose, onEditSuccess}) => {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [warehouseData, setWarehouseData] = useState([]);
  const [productCategoryData, setProductCategoryData] = useState([]);

  useEffect(() => {
    fetchDataWarehouse()
    fetchDataProductCategory()
  }, [])

  const fetchDataWarehouse = () => {
    getAllWarehouse().then((result) => {
      setWarehouseData([...result.warehouse]);
    })
  }

  const fetchDataProductCategory = () => {
    getAllProductCategory().then((result) => {
      setProductCategoryData([...result.productCategory]);
    })
  }

  const [formData, setFormData] = useState({
    product_code: "",
    product_name: "",
    product_stock: 0,
    product_status: "",
    category_name: "",
    warehouse_name: "",
    product_image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const product_image = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, product_image: formData.product_image }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(product.product_id, formData);
      // Panggil fungsi sukses dan tutup formulir
      onEditSuccess();
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  return (
    <div className={`modal ${visible ? "visible" : "hidden"}`}>
    <div id="container" className="flex justify-center w-screen h-screen bg-black/30 absolute backdrop-blur">
<div className="m-auto rounded-3xl w-1/3 h-[60%] bg-white p-5">
    <div className="flex justify-end">
    <button onClick={onClose}>
        <XMarkIcon className="w-6 h-6 text-black"/>
      </button>
    </div>
    <form onSubmit={handleFormSubmit}>
    <div className="text-3xl font-bold text-black mb-6">Edit Product</div>
      <div className="grid grid-cols-4">
        <div className="flex justify-start col-span-3">
        <label htmlFor="product_name" className="text-black cols-span-3 italic font-light pl-2">Product Name</label>
        </div>
        <div className="flex justify-start ">
        <label htmlFor="product_code" className="text-black italic font-light pl-2">Product Code</label>
        </div>
        <input type="text" name="product_name" id="product_name" defaultValue={product.product_name}
        onChange={handleInputChange} className="rounded-xl text-black p-2 m-1 col-span-3" /> 
        <input type="text" name="product_code" id="product_code" defaultValue={product.product_code}
        onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" />
      </div>
      <div className="grid grid-cols-4 mt-2">
        <div className="flex justify-start">
        <label htmlFor="product_status" className="text-black italic font-light pl-2" >Quantity</label>
        </div>
        <div className="flex justify-start">
        <label htmlFor="product_status" className="text-black italic font-light pl-2">Product Status</label>
        </div>
        <div className="flex justify-start col-span-2">
        <label htmlFor="image" className="text-black italic font-light pl-2">Product Photo</label>
        </div>
        <input type="number" name="product_stock" id="product_stock" defaultValue={product.product_stock}
        onChange={handleInputChange} className="rounded-xl text-black p-2 m-1" />
        <select name="product_status" id="product_status" defaultValue={product.product_status}
        onChange={handleInputChange} className="rounded-xl border-none bg-gray-300 text-black p-2 m-1 placeholder:text-gray-400 placeholder:font-thin">
          <option disabled value={product.product_status} className="text-gray-400">{product.product_status}</option>
          <option>Sudah Sampai</option>
          <option>Dalam Perjalanan</option>
        </select>
        <div className="flex justify-start col-span-2 row-span-8 m-1">
          <section className="container border-2 border-dashed rounded-xl text-gray-400">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} 
                type="file"
                id="product_image"
                accept="image/*"
                onChange={handleImageChange} />
              <div className="mt-4 mx-4 mb-12">
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              </div>
                <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
              </aside>
            </section>
        </div>
        <div className="flex justify-start col-span-2">
        <label htmlFor="category_name" className="text-black italic font-light pl-2">Category</label>
        </div>
        <select name="category_name" id="category_id" defaultValue={product.product_category.category_name}
        onChange={handleInputChange} className="rounded-xl border-none bg-gray-300 text-black p-3 m-1 col-span-2 placeholder:text-gray-400 placeholder:font-thin">
      <option disabled value={product.product_category.category_name} className="text-gray-400">{product.product_category.category_name}</option>
      {
      productCategoryData.map((item) => (
        <option key={item.category_id} value={item.category_name}>
          {item.category_name}
        </option>
        ))
      }
        </select>
        <div className="col-span-2"></div>
        <div className="flex justify-start col-span-2">
        <label htmlFor="warehouse_name" className="text-black italic font-light pl-2">Warehouse</label>
        </div>
        <div className="col-span-2"></div>
        <select name="warehouse_name" id="warehouse_id" defaultValue={product.warehouse.warehouse_name}
        onChange={handleInputChange} className="rounded-xl border-none bg-gray-300 text-black p-3 m-1 col-span-2 placeholder:text-gray-400 placeholder:font-thin">
      <option disabled value={product.warehouse.warehouse_name} className="text-gray-400">{product.warehouse.warehouse_name}</option>
      {
      warehouseData.map((item) => (
        <option key={item.warehouse_id} value={item.warehouse_name}>
          {item.warehouse_name}
        </option>
        ))
      }
        </select>
    </div>
      
      <div className="flex justify-end">
        <button type="submit" className="text-white font-bold bg-primary mt-5 mr-1 px-5 py-2 rounded-full">Update</button>
      </div>
      </form>
    </div>
    
 <div>
</div>
</div>
    </div>
  );
};



export default EditProductForm