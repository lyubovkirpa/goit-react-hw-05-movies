import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TrendingMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <h1>Trending today</h1>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default TrendingMovieList;
