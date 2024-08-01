export function Note({ id, text, date, handleDel, handleEdit }) {
  return (
    <div className="note ">
      <h3>{text}</h3>
      <div className="note-footer">
        <small>{date.updatedAt}</small>
        <button
          className="save"
          // className="delete-icon"
          onClick={() => {
            handleDel(id);
          }}
        >
          Delete
        </button>
        &nbsp;
        <button onClick={() => handleEdit(id, text)} className="save">
          Edit
        </button>
      </div>
    </div>
  );
}
