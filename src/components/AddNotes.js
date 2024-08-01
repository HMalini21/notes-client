import { useState } from 'react';

export function AddNotes({ handleAdd }) {
  const [addNotes, setAddNotes] = useState('');
  const [error, setError] = useState(true);
  const characterLimit = 200;

  function handleChange(e) {
    const value = e.target.value;
    if (value) {
      setAddNotes(value);
      setError('');
    }
  }
  function handleChange(e) {
    if (characterLimit - e.target.value.length >= 0) {
      setAddNotes(e.target.value);
    }
  }
  function handleSave(e) {
    e.preventDefault();
    if (addNotes) {
      handleAdd(addNotes);
      setAddNotes('');
    } else {
      setError('write something!!');
    }
    console.log('saved');
  }
  return (
    <>
      <div className="note new">
        <form onSubmit={handleSave}>
          <textarea
            placeholder="type your text"
            onChange={handleChange}
            onBlur={() => handleEditContent()}
            value={addNotes}
            rows="8"
            cols="30"
          ></textarea>
          {error && <span>{error}</span>}

          <div className="note-footer">
            <small>{characterLimit - addNotes.length}remaining</small>
            <button className="save" type="submit">
              save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
