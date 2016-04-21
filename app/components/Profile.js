import React from 'react';

import Notes from './Notes/Notes';






class Profile extends React.Component{
  constructor(props){ /*    with ES6 getInitialState function is replaced by the constructor function*/
    super(props);
  }
  render(){
    return (
      <div className="row">
      Notes of {this.props.params.username}
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            priority="high" />
        </div>
        <div className="col-md-4">
         <Notes
            username={this.props.params.username}
            priority="medium" />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            priority="low"  />
        </div>
      </div>
    )
  }
};

export default Profile;