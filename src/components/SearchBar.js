export function SearchBar({ handleSearch }) {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearch(event.target.value)}
        placeholder="search..."
        type="text"
      ></input>
    </div>
  );
}
