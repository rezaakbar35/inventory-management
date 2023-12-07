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

// async function getProductShippingByUser(username) {
//   try {
//     const response = await instance.get(`/product-shipping/users/${username}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message || "Something went wrong");
//   }
// }

// Function for create product shipping endpoint
async function createProductShipping(
  product_code,
  username,
  warehouse_name,
  quantity,
  tracking_number,
  product_shipment_status
) {
  try {
    const response = await instance.post("/product-shipping/create", {
      product_code,
      username,
      warehouse_name,
      quantity,
      tracking_number,
      product_shipment_status,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for update product shipping endpoint
async function updateWarehouseCategory(
  product_code,
  username,
  warehouse_name,
  tracking_number,
  product_shipment_status
) {
  try {
    const response = await instance.put(
      `/product-shipping/${shipping_id}/update`,
      {
        product_code,
        username,
        warehouse_name,
        tracking_number,
        product_shipment_status,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for delete product shipping endpoint
async function deleteProductShipping(id) {
  try {
    const response = await instance.delete(`/product-shipping/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

export {
  getAllProductShipping,
  getProductShippingById,
  createProductShipping,
  updateWarehouseCategory,
  deleteProductShipping,
  // getProductShippingByUser,
};
