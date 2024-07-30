import { Note } from './Note';
import { AddNotes } from './AddNotes';
export function Noteslist({ notes, handleAdd, handleDel }) {
  return (
    <div className="notes-list">
      {notes.map((note, key) => (
        <Note key={key} id={note.id} text={note.text} date={note.date} handleDel={handleDel} />
      ))}
      <AddNotes handleAdd={handleAdd} />
    </div>
  );
}
