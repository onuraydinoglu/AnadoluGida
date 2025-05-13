import axios from "axios";

const API_URL = "http://localhost:5104/api/categories";

// Tüm kategorileri getir
export const getCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Belirli bir kategoriyi ID ile getir
export const getCategoryById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Yeni kategori ekle
export const addCategory = async (category) => {
  await axios.post(API_URL, category);
};

// Kategori güncelle
export const updateCategory = async (id, category) => {
  await axios.put(`${API_URL}/${id}`, category);
};

// Kategori sil
export const deleteCategory = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
