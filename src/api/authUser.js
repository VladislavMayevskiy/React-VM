import api from "./api";

export const createUser = async(userData) => {
    try {
const response = await api.post("/auth/register",userData)
return response.data

    } catch (error) {
        console.error("Registration failed",error.message)
        alert("BACKEND RESPONSE:" + JSON.stringify(error.response?.data, null, 2));
        throw error
    }
}