const [editId, setEditId] = useState(null);
  const [note, setNote] = useState('');
  function handleEditNotes(id, text) {
    setEditId(id), setNote(text);
  }

  function handleUpdate() {
    if (editId) {
      axios
        .post(`http://localhost:1995/notes/update/${editId}`, { text: note })
        .then((res) => console.log(res.data, 'edited'))
        .catch((err) => console.log(err.data));
    }
  }


// another way to write a edit function