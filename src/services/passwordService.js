import axios from "axios";
const API_BASE_URL_PASSWORDS = import.meta.env.VITE_API_BASE_URL_PASSWORD;
const API_BASE_URL_MASTERKEY = import.meta.env.VITE_API_BASE_URL_MASTERKEY;  // Change this if needed

export const generatePassword = async (website) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_BASE_URL_PASSWORDS}/generate`,
      { website },
      { headers: { Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status == 401) {
      // console.warn("Unauthorized. Token may be missing or expired.");
      return { error: "Session Timed Out" };
    }
    else if (error.response && error.response.status == 400) {
      return { error: "Bad Request" };
    }
    console.error("Unexpected Error:", error);
    throw error;
  }
};

export const deletePassword = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_BASE_URL_PASSWORDS}/delete/${id}`, { headers: { Authorization: `${token}` } });
    return response.data;
  } catch (error) {
    if (error.response.status == 404) {
      return { error: "Password Not Found" };
    }
    else if (error.response && error.response.status == 403) {
      return { error: "Please login again" };
    }
  }
}

export const getAllPasswords = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL_PASSWORD}`, { headers: { Authorization: `${token}` } });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status == 401) {
      // console.warn("Unauthorized. Token may be missing or expired.");
      return { error: "Session Timed Out" };
    }
    else {
      console.error(error);
    }
  }
}


export const getMasterString = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL_MASTERKEY}`, {
      headers: {
        Authorization: `${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status == 401) {
      return { error: "Unauthorized" };
    }
    else {
      return { error: "Server Error" };
    }
  }
}

export const getOnePassword = async (passwordId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL_PASSWORDS}/one/${passwordId}`, {
      headers: {
        Authorization: `${token}`
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status == 404) {
      return { error: "Not Found" };
    }
    else if (error.response && error.response.status == 403) {
      return { error: "Unauthorized" };
    }
    else {
      return { error: "Server Error" };
    }
  }
}

export const updateOnePassword = async (id, website) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${API_BASE_URL_PASSWORDS}/${id}`,
      { website },
      {
        headers: {
          Authorization: token
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status == 404) {
      return { error: "Not Found" };
    }
    else if (error.response && error.response.status == 403) {
      return { error: "Unauthorized" };
    }
    else {
      return { error: "Server Error" };
    }
  }
}