import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.h1`
  margin: 0;
  color: lightgrey;
  font-weight: 400;
  margin-bottom: 12px;
`;

export const TrendItem = styled.li`
  margin-left: 12px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FilmLink = styled(Link)`
  color: lightgrey;
  text-decoration: none;
`;