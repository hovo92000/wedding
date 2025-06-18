import axios from 'axios';

const BASE_URL = ""; 

export async function fetchDataFromAPI(endpoint) {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  
  export async function sendDataToAPI(endpoint, data) {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error("Error sending data:", error);
      throw error;
    }
  }
  

