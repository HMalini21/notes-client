import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Noteslist } from '../components/Noteslist';
import { SearchBar } from '../components/SearchBar';
import axios from 'axios';

function IndexPage() {
  const [notes, setNotes] = useState([]);
  const [addComp, setAddComp] = useState(false);
  const [error, setError] = useState('');
  const [searchNotes, setSearchNotes] = useState('');

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
    <Layout title="NOTES">
      <SearchBar handleSearch={setSearchNotes} addComp={setAddComp} />
      {error ? <h2>{error}</h2> : ''}
      <Noteslist
        addNewNote={addComp}
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchNotes))}
        handleAdd={handleAdd}
        handleDel={handleDel}
        handleEdit={handleUpdate}
      />
    </Layout>
  );
}

export default IndexPage;
