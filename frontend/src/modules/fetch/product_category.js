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

// Function for delete product-category endpoint
async function deleteProductCategory(id) {
    try {
      const response = await instance.delete(`/product-category/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export { getAllProductCategory, getProductCategoryById, deleteProductCategory };
