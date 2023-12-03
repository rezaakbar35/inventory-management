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

// Function for create book endpoint
async function createBook(formData) {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for get all books endpoint
async function getAllProduct() {
  try {
    const response = await instance.get('/product');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for edit book endpoint
async function editBook(id, title, author, publisher, year, pages) {
  try {
    const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

// Function for delete book endpoint
async function deleteBook(id) {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

async function getProductById(id) {
  try {
    const response = await instance.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}

export { registerUser, loginUser, createBook, getAllProduct, editBook, deleteBook,getProductById };