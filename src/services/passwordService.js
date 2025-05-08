import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/password";  // Change this if needed

export const generatePassword = async (website) => {
  try {

    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL}/generate`,
      { website },
      { headers: { Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status == 401) {
      // console.warn("Unauthorized. Token may be missing or expired.");
      return { error: "Session Timed Out" };
    }
    console.error("Unexpected Error:", error);
    throw error;
  }
};
