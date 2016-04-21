import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';
import Rebase from 're-base';

const base = Rebase.createClass('https://cloud-notes.firebaseio.com/');


class Notes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
    this.handleAddNote = this.handleAddNote.bind(this);
  }
  componentDidMount(){
    this.init(this.props.username, this.props.priority)
  }
  componentWillReceiveProps(nextProps){
    base.removeBinding(this.ref);
    this.init(nextProps.params.username, this.props.priority);
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  init(username, priority){
    this.ref = base.bindToState(`${username}/${priority}`, {
      context: this,
      asArray : true,
      state : 'notes'
    });
  }
  handleAddNote(newNote, priority){
    base.post(`${this.props.username}/${priority}`, {
      data: this.state.notes.concat([newNote])
    })
  }

  render(){
    return (
      <div>
        <h3> Notes with {this.props.priority}</h3>
        <AddNote priority={this.props.priority} username={this.props.username} addNote={this.handleAddNote} />
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  priority: React.PropTypes.string.isRequired
}

export default Notes;