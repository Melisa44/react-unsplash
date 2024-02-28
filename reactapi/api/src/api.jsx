

  import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID QLOHim0xR7qaFC5K2oHlpCRbs2yICVFv_Qd5UD0AOao',
    },
    params: {
      query: term,
    },
  });
 
  return response.data.results;
};

export default searchImages;


