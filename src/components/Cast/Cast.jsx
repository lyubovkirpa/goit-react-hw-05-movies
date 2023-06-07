import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'servises/fetchMovies';
import toast from 'react-hot-toast';
import CastList from 'components/CastList/CastList';
import { RotatingLines } from 'react-loader-spinner';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [load, setLoad] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoad(true);
      
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9218a8fe57d9a10810e7b861ea45534f&language=en-US`
        );

        const actors = dataMovie.cast.map(
          ({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          })
        );

        if (actors.length === 0) {
          toast.error(`No cast.`);
        }

        setActors(actors);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      {actors ? <CastList actors={actors} /> : <div>No actors list</div>}{' '}
      {load && (
        <RotatingLines
          strokeColor="rgb(11, 127, 171)"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </>
  );
};

export default Cast;
