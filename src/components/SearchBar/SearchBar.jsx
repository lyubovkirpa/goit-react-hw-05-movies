import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchBar.styled'; 

const SearchBar = ({ handleSubmit, value, setInputValue }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input 
      type="text"
      name="query"
      autoComplete="off"
      placeholder="Search movie"
      value={value}
      onChange={event => setInputValue(event.target.value)}        
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};