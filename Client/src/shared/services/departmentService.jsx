import axios from "axios";

const API_URL = "http://localhost:5104/api/departments";

// Tüm departmanları getir
export const getDepartments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Belirli bir departmanı ID ile getir
export const getDepartmentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Yeni departman ekle
export const addDepartment = async (department) => {
  await axios.post(API_URL, department);
};

// Departman güncelle
export const updateDepartment = async (id, department) => {
  await axios.put(`${API_URL}/${id}`, department);
};

// Departman sil
export const deleteDepartment = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
