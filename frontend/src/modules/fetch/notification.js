import { instance } from '../axios/index';

async function getAllNotification() {
    try {
      const response = await instance.get('/notification');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

  export {getAllNotification}