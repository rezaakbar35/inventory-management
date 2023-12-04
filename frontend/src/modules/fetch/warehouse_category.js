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

export { getAllWarehouseCategory, getWarehouseCategoryById };
