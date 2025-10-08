//isinya ada di-ss
import axios from 'axios';
import { APIConfiguration } from '@/config/api.config';

const url = APIConfiguration.baseUrl || "https://e-commerce-api-production-26ab.up.railway.app"

export const apiClient = axios.create({
  baseURL: `${url}/api`,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApiClient = axios.create({
  baseURL: `${url}/api`,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk inject token ke setiap request
authApiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
