import NotesCard from './NotesCard';

export function Noteslist({ addNewNote, notes, handleAdd, handleDel, handleEdit }) {
  return (
    <div className="notes-list">
      {addNewNote && (
        <NotesCard note={''} postNote={handleAdd} handleDel={handleDel} addEdit={handleEdit} />
      )}
      {notes.map((note, key) => (
        <NotesCard
          key={key}
          note={note}
          postNote={handleAdd}
          handleDel={handleDel}
          addEdit={handleEdit}
        />
      ))}
    </div>
  );
}
