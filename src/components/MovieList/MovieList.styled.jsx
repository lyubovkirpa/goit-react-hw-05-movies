import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  margin-left: 12px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FilmLink = styled(Link)`
  color: lightgrey;
  text-decoration: none;
`;