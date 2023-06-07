import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import fetchMovies from 'servises/fetchMovies';
import ReviewList from 'components/ReviewList/ReviewList';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(()=> {
    const fetch = async() => {
      try {
        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9218a8fe57d9a10810e7b861ea45534f&language=en-US&page=1`
        );

        const reviews = dataMovie.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));

        if (reviews.length === 0) {
          toast.error(`No reviews.`);
        }
        setReviews(reviews);

      } catch (error) {
        console.log(error.message);
      }
    }
    fetch();
  }, [movieId]);

  return (
    <>
    {reviews && <ReviewList reviews={reviews} />}
    </>
  ) 
};

export default Reviews;
