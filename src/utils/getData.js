import data from '../../data.json';

import axios from 'axios';

//Used only during development
const API_BASE_URL = '';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getApiData = async (endpoint, params = {}) =>
  api
    .get(endpoint, { params })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
//return mock data
export const getData = async () => data.data;
