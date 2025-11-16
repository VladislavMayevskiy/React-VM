import api from "./api";

export const forgotPassword = async(userData) => {
    try {
const response = await api.post("/auth/forgot-password",userData)
return response.data
    } catch (error) {
        console.error(error.message);
    throw error;
    }
}