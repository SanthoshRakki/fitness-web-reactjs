

const Notes = ({ note, newNote, setNewNote, handleNotes,handleDelete }) => {

  return (
    <div className='noted'  >
      <h2>{ "Stay on Track with Fitness Journaling"} </h2>
      <br></br>
      <label htmlFor='notes'>Notes</label>
      <input
        type='text'
        value={newNote}
        placeholder='Add a new note'
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button type='button' onClick={(e)=>handleNotes(e)}>
        Submit
      </button>

      {note.map((item) => (
        <div key={item.id}>
          <h1>{item.note}</h1>
          <button type='button' onClick={() => handleDelete(item.id)} style={{ background: "#e74c3cb" }} >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notes;
