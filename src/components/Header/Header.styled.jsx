import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavLinks = styled(NavLink)`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: gray;
  font-weight: 500;
 
  &.active {
    color: lightgray;
    box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);
  }
  &:hover {
    color: lightgray;
  }
`;
 
export const HeaderLinks = styled.header`
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(11 127 171 / 50%) 0px 0px 25px 5px;

  > nav {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }
`;