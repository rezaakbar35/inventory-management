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

// Function for create notification endpoint
async function createNotification(notification_title, notification_description, username) {
  try {
    const response = await instance.post('/notification/create', {notification_title, notification_description, username});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for update notification endpoint
async function updateNotification(notification_id, notification_title, notification_description, username) {
  try {
    const response = await instance.put(`/notification/${notification_id}/update`, { notification_title, notification_description, username });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
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

export { getAllNotification, getNotificationById, createNotification, updateNotification, deleteNotification };
