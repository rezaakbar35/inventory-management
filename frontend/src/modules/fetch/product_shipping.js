import { instance } from "../axios/index";

async function getAllProductShipping() {
  try {
    const response = await instance.get("/product-shipping");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for get product shipping by id
async function getProductShippingById(id) {
  try {
    const response = await instance.get(`/product-shipping/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}
export { getAllProductShipping, getProductShippingById };
