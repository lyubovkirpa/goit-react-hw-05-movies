const SearchBar = ({ handleSubmit, value, setInputValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="query"
      autoComplete="off"
      placeholder="Search movie"
      value={value}
      onChange={event => setInputValue(event.target.value)}        
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
