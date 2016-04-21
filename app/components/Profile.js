import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';


const base = Rebase.createClass('https://cloud-notes.firebaseio.com/')

class Profile extends React.Component{
  constructor(props){ /*    with ES6 getInitialState function is replaced by the constructor function*/
    super(props);
    this.state = {
      notes: []
    }
  }
  componentDidMount(){
    this.init(this.props.params.username)
  }
  componentWillReceiveProps(nextProps){
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  init(username){
    this.ref = base.bindToState(username, {
      context: this,
      asArray : true,
      state : 'notes'
    });
  }
  handleAddNote(newNote, priority){
    base.post(`${this.props.params.username}/${priority}`, {
      data: this.state.notes.concat([newNote])
    })
  }
  render(){
    return (
      <div className="row">
      Notes of {this.props.params.username}
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            priority="high"
            addNote={(newNote, priority) => this.handleAddNote(newNote, priority)} />
        </div>
        <div className="col-md-4">
         <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            priority="medium"
            addNote={(newNote, priority) => this.handleAddNote(newNote, priority)} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            priority="low"
            addNote={(newNote, priority) => this.handleAddNote(newNote, priority)} />
        </div>
      </div>
    )
  }
};

export default Profile;