
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Sesuaikan dengan base URL backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchServices = () => api.get('/services');
export const fetchProjects = () => api.get('/projects');
export const fetchFaqs = () => api.get('/faq');

export default api;
