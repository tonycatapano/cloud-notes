import React from 'react';
import Notes from './Notes/Notes';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="text-center">
        <h2 style={{color:"#337ab7"}}>Notes of <b>{this.props.params.username}</b> </h2>
        </div>
        <div className="row">
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
      </div>
    )
  }
};

export default Profile;