import { useEffect, useState } from 'react';
import './App.css';
import { Noteslist } from './components/Noteslist';
import { SearchBar } from './components/SearchBar';
import { Header } from './components/Header';
import axios from 'axios';
import NotesCard from './components/NotesCard';

function App() {
  const [notes, setNotes] = useState([]);
  const [addComp, setAddComp] = useState(false);
  const [error, setError] = useState('');
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
    const getAllNotes = async () => {
      try {
        await axios.get('http://localhost:1995/notes/getAll').then((res) => setNotes(res.data));
      } catch (e) {
        setError(e.message);
      }
    };
    getAllNotes();
  }, []);

  useEffect(() => {
    localStorage.setItem('saveThemes', JSON.stringify(darkMode));
  }, [darkMode]);

  function handleAdd(text) {
    const addnewnotes = {
      text: text,
    };
    axios
      .post('http://localhost:1995/notes/post', addnewnotes)
      .then((res) => console.log(res.data, 'posted'))
      .catch((err) => console.log(err.data));

    window.location.reload();
  }

  function handleDel(id) {
    axios
      .delete(`http://localhost:1995/notes/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((res) => res.data);

    history.go(0);
  }

  function handleUpdate(editId, note) {
    if (editId) {
      axios
        .put(`http://localhost:1995/notes/update/${editId}`, { text: note })
        .then((res) => console.log(res.data, 'edited'))
        .catch((err) => console.log(err.data));
    }
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="Container">
        <Header handleDarkMode={setDarkMode} />
        <SearchBar handleSearch={setSearchNotes} addComp={setAddComp} />
        {error ? <h2>{error}</h2> : ''}
        <Noteslist
          addNewNote={addComp}
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchNotes))}
          handleAdd={handleAdd}
          handleDel={handleDel}
          handleEdit={handleUpdate}
        />
        {/* {addComp && (
          <NotesCard
            notes={''}
            handleAdd={handleAdd}
            handleDel={handleDel}
            handleEdit={handleUpdate}
          />
        )} */}
      </div>
    </div>
  );
}

export default App;
