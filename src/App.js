import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { Noteslist } from './components/Noteslist';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('save-Notes')) || []);

  const [searchNotes, setSearchNotes] = useState('');

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('saveThemes')) || false);

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body').setAttribute('class', 'dark-mode');
    } else {
      document.querySelector('body').setAttribute('class', 'light-mode');
    }
  }, [darkMode]);

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('save-Notes'));
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('save-Notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('saveThemes', JSON.stringify(darkMode));
  }, [darkMode]);

  function handleAdd(text) {
    const date = new Date();
    const addnewnotes = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, addnewnotes];
    setNotes(newNotes);
  }

  function handleDel(id) {
    const noteDel = notes.filter((note) => note.id !== id);
    setNotes(noteDel);
  }
  return (
    <div>
      <div className="Container">
        <Header handleDarkMode={setDarkMode} />
        <SearchBar handleSearch={setSearchNotes} />
        <Noteslist
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchNotes))}
          handleAdd={handleAdd}
          handleDel={handleDel}
        />
      </div>
    </div>
  );
}

export default App;
