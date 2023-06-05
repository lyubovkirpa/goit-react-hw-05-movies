import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsSection = styled.section`
  display: flex;
`;

export const Info = styled.div`
  margin-left: 16px;
  margin-top: 50px;
`;

export const Name = styled.h2`
  color: lightgrey;
  font-weight: 500;
  font-size: 25px;
  margin: 0;
`;

export const Description = styled.p`
  color: lightgrey;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
  width: 700px;
  line-height: 1.3;
`;

export const Text = styled.h3`
  color: lightgrey;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: column;
  color: lightgrey;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 12px;
`;

export const GenresItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  margin-top: 15px;
`;

export const LinkItem = styled.li`
  margin-left: 12px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const LinkMovie = styled(NavLink)`
  padding: 5px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: gray;
  font-weight: 500;
  &.active {
    color: lightgray;
    box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);
  }
`;

export const BtnGoBack = styled(Link)`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: gray;
  font-weight: 500;
  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);
  margin-bottom: 15px;
  width: 70px;
  display: flex;
  justify-content: center;

  &:hover {
    color: lightgray;
  }
`;