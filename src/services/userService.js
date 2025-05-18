import axios from "axios";

const API_BASE_URL_USERS = `${import.meta.env.VITE_API_BASE_URL_USERS}`;

// Get user profile
export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL_USERS}/me`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        if (error.response?.status === 401) {
            return { error: "Unauthorized" };
        }
        return { error: "Server Error" };
    }
};

// Update name and email
export const updateProfile = async (data) => {
    try {
        const token = localStorage.getItem("token");
        console.log(data);
        const response = await axios.put(`${API_BASE_URL_USERS}/me`, data, {
            headers: {
                Authorization: `${token}`,
            },
        });
        console.log(response);
        return { success: true, user: response.data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || "Update failed" };
    }
};

// Change password (or master string)
export const changePassword = async ({ oldPass, newPass }) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(`${API_BASE_URL_USERS}/change-password`, {
            oldPassword: oldPass,
            newPassword: newPass,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || "Password change failed" };
    }
};

// Delete account
export const deleteAccount = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`${API_BASE_URL_USERS}/me`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        const data = response.data;
        console.log(data);
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.response?.data?.message || "Deletion failed" };
    }
};
