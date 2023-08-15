import axios from 'axios';

const API_KEY = 'DxfT7ymEBfpi0Ay3DVDcmUmnUyw6CLfscvoHAUEvdLAY8Mfu9MVVh31g';

const fetchRandomImages = async () => {
  try {
    const response = await axios.get(
      'https://api.pexels.com/v1/curated?per_page=40',
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching random images:', error);
    throw error;
  }
};

const fetchMoreRandomImages = async (page) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=40`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching random images:', error);
    throw error;
  }
};


const fetchSearchedImages = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchTerm.toUpperCase()}&per_page=40`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching searched images:', error);
    throw error;
  }
};

export { fetchRandomImages, fetchSearchedImages, fetchMoreRandomImages };
