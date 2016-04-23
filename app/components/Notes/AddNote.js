import React from 'react';

class AddNote extends React.Component {
  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote, this.props.priority);
  }
  setRef(ref){
    this.note = ref;
  }
  render(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)}/>
        <span className='input-group-btn'>
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired,
  priority: React.PropTypes.string.isRequired
};

export default AddNote