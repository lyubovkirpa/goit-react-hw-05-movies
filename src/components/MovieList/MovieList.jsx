import { useLocation } from 'react-router-dom';
import { List, Item, FilmLink } from './MovieList.styled';
 
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <FilmLink to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </FilmLink>
        </Item>
      ))}
    </List>
  )
};

export default MovieList;