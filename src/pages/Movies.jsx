import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import fetchMovies from 'servises/fetchMovies';
import MovieList from 'components/MovieList/MovieList';
import toast, { Toaster } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

const Movies = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const query = searchParams.get('query') ?? '';
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        return;
      }
      setLoad(true);
      try {
        const dataMovies = await fetchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=9218a8fe57d9a10810e7b861ea45534f&language=en-US&query=${query}&page=1&include_adult=false`
        );

        const movies = dataMovies.results;

        if (movies.length === 0) {
          toast.error(`Sorry, the movies you requested: ${query} not found.`);
        }

        setMoviesSearch(movies);
        setInputValue('');
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };

    fetch();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.error('Fill in the search field');
      return;
    }
    const normalizedValue = event.target.elements.query.value.toLowerCase();
    const nextSearchParams =
      inputValue !== '' ? { query: normalizedValue } : {};
    setSearchParams(nextSearchParams);
  };

  return (
    <>
      <section>
        <div>
          <SearchBar
            handleSubmit={handleSubmit}
            value={inputValue}
            setInputValue={setInputValue}
          />
          <MovieList movies={moviesSearch} />
        </div>
        {load && (
          <RotatingLines
            strokeColor="rgb(11, 127, 171)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
      </section>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'rgb(11, 127, 171)',
            color: '#fff',
          },
        }}
      />
    </>
  );
};

export default Movies;
