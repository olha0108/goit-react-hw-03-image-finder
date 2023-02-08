import axios from 'axios';

export const fetchImages = async (search, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    method: 'get',
    params: {
      key: '22525601-17382d687a68b739241abc2fe',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
};
