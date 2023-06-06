import { ListActor, CardActor, ImageActor, ActorName, Text } from "./CastList.styled";

const CastList = ({ actors }) => {
  return (
    <section>
      <ListActor>
        {actors.map(({ id, profile_path, name, character }) => {
          return (
            <CardActor key={id}>
              <ImageActor
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
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