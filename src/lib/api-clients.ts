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
