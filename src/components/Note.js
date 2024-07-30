export function Note({ id, text, date, handleDel }) {
  return (
    <div className="note ">
      <h3>{text}</h3>
      <div className="note-footer">
        <small>{date}</small>
        <button
          className="delete-icon"
          onClick={() => {
            handleDel(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
