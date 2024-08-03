import { useState } from 'react';

const NotesCard = (props) => {
  const { note, postNote, handleDel, addEdit } = props;
  const characterLimit = 200;
  const [addNote, setAddNote] = useState(note ? note.text : '');
  let date;

  if (note) {
    let d = note.date['updatedAt'];
    date = d.split('T');
  }

  function handleChange(e) {
    if (characterLimit - e.target.value.length >= 0) {
      setAddNote(e.target.value);
    }
  }

  function handleEditContent(id) {
    addEdit(id, addNote);
  }

  function handleAdd() {
    postNote(addNote);
  }

  return (
    <>
      <div className={note ? 'note' : 'note new'}>
        <textarea
          placeholder="type your text"
          onChange={(e) => handleChange(e)}
          onBlur={() => (note ? handleEditContent(note._id) : handleAdd())}
          value={addNote}
          rows="8"
          cols="30"
        ></textarea>
        {note ? (
          <div className="note-footer">
            <p>{date[0]}</p>
            <p>{date[1]}</p>
          </div>
        ) : (
          ''
        )}

        <div className="note-footer">
          <small>{characterLimit - addNote.length}remaining</small>
          {note && (
            <button
              className="save"
              onClick={() => {
                handleDel(note._id);
              }}
            >
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NotesCard;
