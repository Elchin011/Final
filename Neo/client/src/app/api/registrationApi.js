// src/api/registrationApi.js
import axios from "axios";

const API_URL = "http://localhost:3001/api"; // backend server URL

// bütün müraciətləri al
export const getPatients = async () => {
  return await axios.get(`${API_URL}/`);
};

// qəbul et
export const approvePatient = async (id) => {
  return await axios.patch(`${API_URL}/${id}`, { status: "approved" });
};

// rədd et
export const rejectPatient = async (id) => {
  return await axios.patch(`${API_URL}/${id}`, { status: "rejected" });
};

