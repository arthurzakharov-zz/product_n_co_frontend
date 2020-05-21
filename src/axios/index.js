import axios from 'axios';

export const BASE_URL = 'https://productnco.herokuapp.com/';

export const HTTPS = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export const path = {
  products: '/product',
};
