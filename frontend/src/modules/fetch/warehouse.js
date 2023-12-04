import { instance } from '../axios/index';

async function getAllWarehouse() {
    try {
      const response = await instance.get('/warehouse');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  export {getAllWarehouse}