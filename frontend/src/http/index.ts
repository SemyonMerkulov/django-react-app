import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});