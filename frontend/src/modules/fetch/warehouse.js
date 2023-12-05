import { instance } from "../axios/index";

async function getAllWarehouse() {
  try {
    const response = await instance.get("/warehouse");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for get warehouse by id
async function getWarehouseById(id) {
  try {
    const response = await instance.get(`/warehouse/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for create warehouse endpoint
async function createWarehouse(warehouse_name, location, category_name) {
  try {
    const response = await instance.post('/warehouse/create', {warehouse_name, location, category_name});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for update warehouse endpoint
async function updateWarehouse(warehouse_id, warehouse_name, location, category_name) {
  try {
    const response = await instance.put(`/warehouse/${warehouse_id}/update`, { warehouse_name, location, category_name});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}


// Function for delete warehouse endpoint
async function deleteWarehouse(id) {
    try {
      const response = await instance.delete(`/warehouse/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export { getAllWarehouse, getWarehouseById, createWarehouse, updateWarehouse, deleteWarehouse };
