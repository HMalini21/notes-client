import { Link } from 'react-router-dom';

export function Header({ handleDarkMode }) {
  return (
    <div className="header">
      <h1>NOTES</h1>
      <div>
        <Link to="/form">LOGIN </Link>
        <button className="theme" onClick={() => handleDarkMode((prevDM) => !prevDM)}>
          ☀/🌝
        </button>
      </div>
    </div>
  );
}
