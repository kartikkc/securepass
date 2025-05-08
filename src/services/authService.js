import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_AUTH;  // Change this if your backend URL is different
const API_BASE_URL_GOOGLE = import.meta.env.VITE_API_BASE_URL_AUTH_GOOGLE;

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    if (error.response.status == 400) {
      return { error: "Invalid Credentials" };
      console.log(error.response);
    }
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    if (error.response.status == 400) {
      return { error: "Incomplete Details" };
      console.log(error.response);
    }
  }
};

export const googleLoginAPI = async (master) => {
  window.location.href = (`${import.meta.env.VITE_GOOGLE_API_URL}?state=${master}`);
}
