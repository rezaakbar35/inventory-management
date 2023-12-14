import { instance } from "../axios/index";

async function getAllWarehouseCategory() {
  try {
    const response = await instance.get("/warehouse-category");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for get warehouse_category by id
async function getWarehouseCategoryById(id) {
  try {
    const response = await instance.get(`/warehouse-category/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for create warehouse category endpoint
async function createWarehouseCategory(formData){
const { category_name,description } = formData;
  try {
    const response = await instance.post('/warehouse-category/create', { category_name, description });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for update warehouse category endpoint
async function updateWarehouseCategory(category_id, category_name, description) {
  try {
    const response = await instance.put(`/warehouse-category/${category_id}/update`, { category_name, description });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete warehouse-category endpoint
async function deleteWarehouseCategory(id) {
    try {
      const response = await instance.delete(`/warehouse-category/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export { getAllWarehouseCategory, getWarehouseCategoryById, createWarehouseCategory, updateWarehouseCategory, deleteWarehouseCategory };
