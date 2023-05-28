import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  return <div>{movieId}</div>;
};

export default Cast;
