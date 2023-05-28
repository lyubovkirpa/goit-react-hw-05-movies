import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(()=> {

  },[]);

  return (
    <div>
       <h2>Movie Details : {movieId}</h2>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
        <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />  
    </div>
  )
};

export default MovieDetails;