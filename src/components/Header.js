export function Header({ handleDarkMode }) {
  return (
    <div className="header">
      <h1>NOTES</h1>
      <button className="save" onClick={() => handleDarkMode((prevDM) => !prevDM)}>
        toggle☀/🌝
      </button>
    </div>
  );
}
