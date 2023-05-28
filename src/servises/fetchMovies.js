import axios from 'axios';
// axios.defaults.url = 'https://api.themoviedb.org/3/trending/movie/'

const fetchMovies = async url => {
  const response = await axios.get(url);

  return response.data;
};

export default fetchMovies;
