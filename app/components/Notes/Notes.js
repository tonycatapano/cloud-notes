import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';


const Notes = ({username, notes, addNote, priority}) => {
  return (
    <div>
      <h3> Notes with {priority}</h3>
      <AddNote priority={priority} username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired,
  priority: React.PropTypes.string.isRequired
}

export default Notes;