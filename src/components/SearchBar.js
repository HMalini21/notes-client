export function SearchBar({ handleSearch, addComp }) {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearch(event.target.value)}
        placeholder="search..."
        type="text"
      ></input>
      <button className="save" onClick={(e) => addComp(true)}>
        add
      </button>
    </div>
  );
}
