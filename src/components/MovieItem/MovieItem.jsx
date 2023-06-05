import { useLocation } from 'react-router-dom';
import { getRaiting } from 'servises/getRaiting';
import { getYear } from 'servises/getYear';
import {
  DetailsSection,
  Info,
  Name,
  Description,
  Text,
  Genres,
  GenresItem,
  LinkList,
  LinkItem,
  LinkMovie,
  BtnGoBack,
} from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const { title, release_date, overview, genres, vote_average } = movie;

  return (
    <DetailsSection>
      <div>
        <BtnGoBack to={backLinkHref}>Go back</BtnGoBack>
      </div>

      <Info>
        <Name>
          {release_date ? `${title} (${getYear(release_date)})` : title}
        </Name>
        <Description>
          {vote_average
            ? `User Score: ${getRaiting(vote_average)}% `
            : 'User Score: no score'}
        </Description>
        <Text>Overview:</Text>
        <Description>{overview ? overview : 'No overview'}</Description>
        <Text>Genres:</Text>
        <Genres>
          {genres.map(el => (
            <GenresItem key={el.id}>{el.name}</GenresItem>
          ))}
        </Genres>

        <Text>Additional information</Text>
        <LinkList>
          <LinkItem>
            <LinkMovie to="cast">Cast</LinkMovie>
          </LinkItem>
          <li>
            <LinkMovie to="reviews">Reviews</LinkMovie>
          </li>
        </LinkList>
      </Info>
    </DetailsSection>
  );
};

export default MovieItem;
