import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // change this for production
});

export const getDocuments = () => api.get('/documents');
export const getCustomers = () => api.get('/customers');
export const getRenewals = () => api.get('/renewals');
export const getInforce = () => api.get('/inforce');
export const getSearch = () => api.get('/search');

export default api;
