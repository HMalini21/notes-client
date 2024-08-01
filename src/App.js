import { useEffect, useState } from 'react';
import './App.css';
import { Noteslist } from './components/Noteslist';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  const [searchNotes, setSearchNotes] = useState('');

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('saveThemes')) || false);

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body').setAttribute('class', 'dark-mode');
    } else {
      document.querySelector('body').setAttribute('class', 'light-mode');
    }
  }, [darkMode]);

  // get all api call
  useEffect(() => {
    function getAllNotes() {
      axios
        .get('http://localhost:1995/notes/getAll')
        .then((res) => setNotes(res.data))
        .catch((err) => console.log(err.data));
    }
    getAllNotes();
  }, [notes]);

  // useEffect(() => {
  //   localStorage.setItem('save-Notes', JSON.stringify(notes));
  // }, [notes]);

  useEffect(() => {
    localStorage.setItem('saveThemes', JSON.stringify(darkMode));
  }, [darkMode]);

  function handleAdd(text) {
    const date = new Date();
    const addnewnotes = {
      text: text,
    };
    axios
      .post('http://localhost:1995/notes/post', addnewnotes)
      .then((res) => console.log(res.data, 'posted'))
      .catch((err) => console.log(err.data));
    // const newNotes = [...notes, addnewnotes];
    // setNotes(newNotes);
  }

  function handleDel(id) {
    const noteDel = notes.filter((note) => note.id !== id);
    axios
      .delete(`http://localhost:1995/notes/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((res) => res.data);
    // setNotes(noteDel);
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
          setNotes={setNotes}
        />
      </div>
    </div>
  );
}

export default App;
