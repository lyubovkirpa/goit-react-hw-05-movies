import styled from 'styled-components';

export const ListActor = styled.ul`
  margin-top: 20px;
  display: grid;
  width: 1200px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding: 0px;
  list-style: none;
`;

export const CardActor = styled.li`
  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.5);
  width: 150px;
  height: 300px;
  margin: 0;
`;

export const ImageActor = styled.img`
  width: 100%;
`;

export const ActorName = styled.p`
  color: lightgrey;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-left: 3px;
  margin-bottom: 5px;
`;
export const Text = styled.p`
  color: lightgrey;
  font-weight: 200;
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-left: 3px;
`;