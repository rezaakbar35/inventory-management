import { instance } from "../axios/index";

async function getAllProductCategory() {
  try {
    const response = await instance.get("/product-category");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for get product category by id
async function getProductCategoryById(id) {
  try {
    const response = await instance.get(`/product-category/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for create notification endpoint
async function createProductCategory(category_name, description) {
  try {
    const response = await instance.post('/product-category/create', {category_name, description});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for update notification endpoint
async function updateProductCategory(category_id, category_name, description) {
  try {
    const response = await instance.put(`/product-category/${category_id}/update`, { category_name, description });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete product-category endpoint
async function deleteProductCategory(id) {
    try {
      const response = await instance.delete(`/product-category/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export { getAllProductCategory, getProductCategoryById, createProductCategory, updateProductCategory, deleteProductCategory };
