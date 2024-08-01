import { Note } from './Note';
import { AddNotes } from './AddNotes';
import { useState } from 'react';

export function Noteslist({ notes, handleAdd, handleDel }) {
  const [editNotes, setEditNotes] = useState(null);
  const [note, setNotes] = useState('');
  function handleEdit(id, text) {
    setEditNotes(id);
    setNotes(text);
  }
  return (
    <div className="notes-list">
      {notes.map((note, key) =>
        editNotes === note._id ? (
          <AddNotes handleAdd={handleAdd} />
        ) : (
          <Note
            key={key}
            id={note._id}
            text={note.text}
            date={note.date}
            handleDel={handleDel}
            handleEdit={handleEdit}
          />
        ),
      )}
      <AddNotes handleAdd={handleAdd} />
    </div>
  );
}
