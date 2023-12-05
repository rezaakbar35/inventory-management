import { instance } from "../axios/index";

// Function for get all product endpoint
async function getAllProduct() {
  try {
    const response = await instance.get("/product");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for get by id product endpoint
async function getProductById(id) {
  try {
    const response = await instance.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for create product endpoint
async function createProduct(formData) {
  try {
    const response = await instance.post('/product/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for update product endpoint
async function updateProduct(product_id, product_code, product_name, category_id,product_stock, 
  warehouse_id, product_status) {
  try {
    const response = await instance.put(`/product/${product_id}/update`, { product_code, product_name, category_id,product_stock, 
      warehouse_id, product_status });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete product endpoint
async function deleteProduct(id) {
    try {
      const response = await instance.delete(`/product/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export {getAllProduct, getProductById, createProduct, updateProduct, deleteProduct}

