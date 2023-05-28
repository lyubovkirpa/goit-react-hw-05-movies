import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  return <div>{movieId}</div>;
};

export default Reviews;
