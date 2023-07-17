const SearchBox = ({ value, onSearch }) => {
  return (
    <input
      onChange={(e) => onSearch(e.currentTarget.value)}
      className="form-control my-3"
      name="query"
      placeholder="Search..."
      value={value}
    />
  );
};

export default SearchBox;
