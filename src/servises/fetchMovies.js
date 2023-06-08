import axios from 'axios';

const fetchMovies = async url => {
  const response = await axios.get(url);

  return response.data;
};

export default fetchMovies;
