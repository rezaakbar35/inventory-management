import { instance } from '../axios/index';
//ganti endpoint berdasarkan pembagian modul backend masing masing :D

// Function for register user endpoint
async function registerUser(first_name, last_name, username, email, password, user_address, user_role) {
  try {
    const response = await instance.post('/register', { first_name, last_name, username, email, password, user_address, user_role });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for login user endpoint
async function loginUser(username, password) {
  try {
    const response = await instance.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

async function getUserSpecific(user_id){
  try{
    const response = await instance.get(`login/user/${user_id}`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong')
  }
}

export { registerUser, loginUser, getUserSpecific };