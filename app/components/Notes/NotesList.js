import React from 'react';

class NotesList extends React.Component{
  handleDeleteNote(index){
    this.props.deleteNote(index);
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.notes.map((note, index) => (
          <li className="list-group-item" key={index}> {note}
            <button onClick={() => this.handleDeleteNote(index)} style={{marginTop:"-5px", float:"right", marginRight:"-8px", height:"30px", width:"30px"}} type="button" class="btn btn-default" aria-label="Delete note">
              <span className="glyphicon glyphicon-folder-close" aria-hidden="true"></span>
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default NotesList;