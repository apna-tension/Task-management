import axios from 'axios';
import { getToken } from '../utils/auth';

const API_URL = 'http://localhost:5000/api/todo';

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getTodos = async () => {
  const response = await axios.get(API_URL, config());
  return response.data;
};

export const addTodo = async (todoData) => {
  const response = await axios.post(`${API_URL}/add`, todoData, config());
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, config());
  return response.data;
};
