import { instance } from '../axios/index';

async function getAllProductCategory() {
    try {
      const response = await instance.get('/product-category');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  export {getAllProductCategory}