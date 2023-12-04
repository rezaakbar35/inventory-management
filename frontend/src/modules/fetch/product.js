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

export { getAllProduct, getProductById };
