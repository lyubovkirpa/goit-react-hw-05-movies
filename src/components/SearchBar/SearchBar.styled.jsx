import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  margin-top: 25px;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 18px;
  line-height: 1.15;
  margin: 0;

  line-height: 1.3;
  color: lightgray;
  background-color: rgb(10 130 170 / 30%);
  width: 300px;
  height: 30px;
  margin-right: 10px;

  border-radius: 4px;
  padding: 4px;
  border-color: lightgray;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #444;
  font-size: 18px;
  font-weight: 500;
  border: none;
  color: gray;
  font-weight: 500;
  box-shadow: 0 0 5px 3px rgba(11, 127, 171, 0.7);
  cursor: pointer;

  &:hover {
    color: lightgray;
  }
`;