import { useEffect, useState } from 'react';
import fetchMovies from 'servises/fetchMovies';
import TrendingMovieList from 'components/TrendingMovieList/TrendingMovieList';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const dataMovies = await fetchMovies(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=9218a8fe57d9a10810e7b861ea45534f'
        );

        const movies = dataMovies.results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));

        setMoviesTrending(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <TrendingMovieList movies={moviesTrending} />
    </>
  );
};

export default Home;
