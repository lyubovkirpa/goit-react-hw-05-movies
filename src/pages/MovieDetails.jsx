import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchMovies from "servises/fetchMovies";
import MovieItem from "components/MovieItem/MovieItem";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(()=> {
    const fetch = async () => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=9218a8fe57d9a10810e7b861ea45534f&language=en-US`
        );
        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
        navigate('/', { replace: true });
      }
    };

    fetch();

  },[movieId, navigate]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <MovieItem  movie={movie} />
      
      <Outlet />  
    </div>
  )
};

export default MovieDetails;