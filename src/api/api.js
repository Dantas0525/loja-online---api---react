import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getProducts = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);
