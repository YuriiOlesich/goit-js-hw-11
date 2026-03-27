// js/pixabay-api.js
import axios from 'axios';

const API_KEY = '55203638-ed2d579cf4ced86cd2d49b188';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;           // повертаємо весь об'єкт { hits, total, totalHits ... }
  } catch (error) {
    console.error('Pixabay API error:', error);
    throw error;
  }
}