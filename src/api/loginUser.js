import api from "./api";

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    console.error("Failed login:",error.message);
    throw error;
  }
};