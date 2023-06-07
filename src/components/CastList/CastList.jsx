import {
  ListActor,
  CardActor,
  ImageActor,
  ActorName,
  Text,
} from './CastList.styled';
import { CiImageOff } from 'react-icons/ci';

const CastList = ({ actors }) => {
  return (
    <section>
      <ListActor>
        {actors.map(({ id, profile_path, name, character }) => {
          return (
            <CardActor key={id}>
              {profile_path ? (
                <ImageActor
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  width="150px"
                  height="225px"
                />
              ) : (
                <CiImageOff />
              )}
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
