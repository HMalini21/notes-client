export function Header({ handleDarkMode }) {
  return (
    <div className="header">
      <h1>NOTES</h1>
      <button className="theme" onClick={() => handleDarkMode((prevDM) => !prevDM)}>
        ☀/🌝
      </button>
    </div>
  );
}
