import PropTypes from 'prop-types';
import { RevList, RevItem, RevName, RevText } from "./ReviewList.styled";

const ReviewList = ({ reviews }) => {
  return (
    <section>
      <RevList>
        {reviews.map(({ id, author, content }) => {
          return (
            <RevItem key={id}>
              <RevName>{author}</RevName>
              <RevText>{content}</RevText>
            </RevItem>
          );
        })}
      </RevList>
    </section>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};