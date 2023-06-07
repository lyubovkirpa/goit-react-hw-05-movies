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