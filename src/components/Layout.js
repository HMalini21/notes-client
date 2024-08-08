import { useEffect, useState } from 'react';
import { Header } from './Header';

function Layout(props) {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('saveThemes')) || false);
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body').setAttribute('class', 'dark-mode');
    } else {
      document.querySelector('body').setAttribute('class', 'light-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('saveThemes', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="Container">
          <Header handleDarkMode={setDarkMode} />
          <main className="container">{props.children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
