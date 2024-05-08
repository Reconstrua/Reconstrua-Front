import axios from 'axios'

export const AxiosAPI = axios.create({
  baseURL: 'https://reconstrua-api.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': [
      'OPTIONS',
      'POST',
      'PUT',
      'GET',
      'DELETE',
      'PATCH',
    ],
  },
})