import axios from 'axios';

export const HTTPS = axios.create({
  baseURL: 'https://productnco.herokuapp.com/',
  timeout: 3000,
});

export const path = {
  products: '/product',
};
