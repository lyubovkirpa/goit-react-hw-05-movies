import PropTypes from 'prop-types';
import {
  ListActor,
  CardActor,
  ImageActor,
  ActorName,
  Text,
} from './CastList.styled';
import placeholder from 'image/placeholder.jpg';

const CastList = ({ actors }) => {
  return (
    <section>
      <ListActor>
        {actors.map(({ id, profile_path, name, character }) => {
          return (
            <CardActor key={id}>
              <ImageActor
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : placeholder
                }
                alt={name}
                width="150px"
                height="225px"
              />
              <ActorName>{name}</ActorName>
              <Text>{character}</Text>
            </CardActor>
          );
        })}
      </ListActor>
    </section>
  );
};

export default CastList;

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
