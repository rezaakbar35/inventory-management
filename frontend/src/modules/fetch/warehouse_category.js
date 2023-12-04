import { instance } from '../axios/index';

async function getAllWarehouseCategory() {
    try {
      const response = await instance.get('/warehouse-category');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  export {getAllWarehouseCategory}