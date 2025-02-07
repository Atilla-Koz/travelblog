import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Axios instance oluşturma
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // İstek öncesi yapılacak işlemler (örn: token ekleme)
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Hata yönetimi
    if (error.response) {
      // Sunucu yanıtı ile dönen hatalar
      console.error('API Error:', error.response.data);
      if (error.response.status === 401) {
        // Oturum sonlandırma işlemleri
        localStorage.removeItem('token');
      }
    } else if (error.request) {
      // İstek yapıldı ama yanıt alınamadı
      console.error('API Error: No response received');
    } else {
      // İstek oluşturulurken hata oluştu
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const api = {
  async get(endpoint) {
    try {
      return await axiosInstance.get(endpoint);
    } catch (error) {
      throw error;
    }
  },

  async post(endpoint, data) {
    try {
      return await axiosInstance.post(endpoint, data);
    } catch (error) {
      throw error;
    }
  },

  async put(endpoint, data) {
    try {
      return await axiosInstance.put(endpoint, data);
    } catch (error) {
      throw error;
    }
  },

  async delete(endpoint) {
    try {
      return await axiosInstance.delete(endpoint);
    } catch (error) {
      throw error;
    }
  },
};

export const blogService = {
  getAllPosts: () => api.get('/posts'),
  getPost: (id) => api.get(`/posts/${id}`),
  createPost: (data) => api.post('/posts', data),
  updatePost: (id, data) => api.put(`/posts/${id}`, data),
  deletePost: (id) => api.delete(`/posts/${id}`),
}; 