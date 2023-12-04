import { instance } from "../axios/index";

async function getAllNotification() {
  try {
    const response = await instance.get("/notification");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

// Function for get warehouse_category by id
async function getNotificationById(id) {
  try {
    const response = await instance.get(`/notification/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

  // Function for delete notification endpoint
  async function deleteNotification(id) {
    try {
      const response = await instance.delete(`/notification/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export { getAllNotification, getNotificationById, deleteNotification };
